import { Shape } from "./Shape.js";

export class Square extends Shape {
    size = 70; // Width and Height

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        
        // Calculate top-left corner so (x,y) remains the center
        const half = this.size / 2;
        const topLeftX = this.x - half;
        const topLeftY = this.y - half;

        ctx.rect(topLeftX, topLeftY, this.size, this.size);
        
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add a border for better visibility
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    isPointInside(px: number, py: number) {
        const half = this.size / 2;
        // Check if mouse is within the bounding box
        return (
            px >= this.x - half &&
            px <= this.x + half &&
            py >= this.y - half &&
            py <= this.y + half
        );
    }
}
