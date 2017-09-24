var Example = Example || {};

Matter.use(
    'matter-wrap'
);

Example.ChivalricOrder = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Vector = Matter.Vector;

    // create engine
    var engine = Engine.create(),
        world = engine.world;    
    world.gravity.y = 0;        

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: true,
            showCollisions: true
        }
    });
    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

    // Game Object
    class Chip {
        constructor(x, y, c) {
            this.position = Vector.create(x, y)
            this.radius = 600/32
            this.color = c
            const options = {
                restitution: 0.9,
                friction: 0.001,
                density: 0.0001
            }
            this.body = Bodies.circle(
                this.position.x, this.position.y, this.radius, options
            )
            World.add(world, this.body)
        }
    }     

    class Player {
    }  

    var p0 = new Player, 
        p1 = new Player,
        p2 = new Player;

    // Game Start
    function init(){

        x = 400
        y = 300

        p0.color = [214, 214, 214]        
        p1.color = [240, 15, 47]
        p2.color = [47, 15, 240]

        p0.chips = [];
        p0.chips[0] = new Chip(x, y, p0.color);
        p0.chips[1] = new Chip(x-50, y, p0.color);
        p0.chips[2] = new Chip(x+50, y, p0.color);
        p0.chips[3] = new Chip(x, y-50, p0.color);
        p0.chips[4] = new Chip(x, y+50, p0.color);

        p1.chips = []
        p2.chips = []
        for (i=0;i<5;++i) {
            p1.chips.push(new Chip(50 , y-100 + i*50, p1.color))
            p2.chips.push(new Chip(x*2-50 , y-100 + i*50, p2.color))
        }
        World.add(world, [
            // walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
        ]);
    }

    init();

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};