import { Shape } from "./shapes/Shape.js";
import { Circle } from "./shapes/Circle.js";
import { Triangle } from "./shapes/Triangle.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// Set Fixed Canvas Size
canvas.width = 800;
canvas.height = 600;

let shapes: Shape[] = [];
let draggingShape: Shape | null = null;
let offset = { x: 0, y: 0 };

// Helper: Random number generator
function randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Helper: Random color generator
function randomColor(): string {
    return `hsl(${Math.random() * 360}, 70%, 50%)`;
}

// Render Loop
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Optional: Draw a placeholder text if empty
    if (shapes.length === 0) {
        ctx.fillStyle = "#ccc";
        ctx.font = "20px sans-serif";
        ctx.fillText("Click buttons below to add shapes", 250, 300);
    }

    shapes.forEach((s) => s.draw(ctx));
    requestAnimationFrame(render);
}

// Mouse Down
canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (let i = shapes.length - 1; i >= 0; i--) {
        if (shapes[i].isPointInside(mouseX, mouseY)) {
            draggingShape = shapes[i];
            offset.x = mouseX - draggingShape.x;
            offset.y = mouseY - draggingShape.y;
            // Bring to front
            shapes.push(shapes.splice(i, 1)[0]);
            break;
        }
    }
});

// Mouse Move
window.addEventListener("mousemove", (e) => {
    if (draggingShape) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        draggingShape.x = mouseX - offset.x;
        draggingShape.y = mouseY - offset.y;
    }
});

// Mouse Up
window.addEventListener("mouseup", () => {
    draggingShape = null;
});

// Buttons
document.getElementById("addCircle")?.addEventListener("click", () => {
    const padding = 50;
    const x = randomRange(padding, canvas.width - padding);
    const y = randomRange(padding, canvas.height - padding);
    shapes.push(new Circle(x, y, randomColor()));
});

document.getElementById("addTriangle")?.addEventListener("click", () => {
    const padding = 60;
    const x = randomRange(padding, canvas.width - padding);
    const y = randomRange(padding, canvas.height - padding);
    shapes.push(new Triangle(x, y, randomColor()));
});

document.getElementById("clear")?.addEventListener("click", () => {
    shapes = [];
});

// Start
render();
