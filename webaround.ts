
interface ISpeak {
    type: "speak";
    text: string;
}
interface IHighlight {
    type: "highlight";
    target: string;
    message: string;
    duration: number;
}
interface IClick {
    type: "click";
    target: string;
    delay: number;
}
interface IInuput {
    type: "input";
    target: string;
    value: string;
    speed: number;
}

interface IParallel {
    type: "parallel";
    actions: IStep[];
}
interface IResize {
    type: "resize";
    width: number;
    height: number;
    device: string | null;
}

interface IAssert {
    type: "assert";
    target: string;
    property: string;
    equals: string;
    message: string;
}

interface IInspect {
    type: "inspect";
    target: string;
    log: string[]
}

type IStep = ISpeak | IHighlight | IClick | IInuput | IParallel | IResize | IAssert | IInspect;


interface IWenAround {
    setupListeners(): void;
    initUI(): void;
    pause(): void;
    togglePause(): void;
    resume(): void;
    pauseUI(): void;
    whilePaused(): void;
    calculateSpeechDuration(text: string): void;
    calculateTypingSpeed(tetxtLenght: number, targetDurationMs: number): void;
    parseScript(waText: string): void;
    play(): void;
    executeStep(step: IStep): Promise<void>;
    speak(text: string): Promise<void>;
    spotlight(selector: string, message: string | number | null): void;
    clearStoplight(): void;

}

type IConfig = {
    defaultTypingSpeed: number;
    speechWPM: number;
    pauseKey: string;
    autoPauseOnInteraction: boolean;
    autoSync: boolean
}
type IState = "IDLE" | "PLAYING" | "PAUSED" | "COMPLETED"


class WebAround implements IWenAround {
    steps: IStep[]
    currentStepIndex: number;
    overlayEl: HTMLElement | null;
    tooltipEl: HTMLElement | null;
    synth: SpeechSynthesis
    state: IState
    config: IConfig


    constructor() {
        this.steps = []
        this.currentStepIndex = 0
        this.overlayEl = null
        this.tooltipEl = null
        this.synth = speechSynthesis
        this.state = "IDLE"
        this.config = {
            defaultTypingSpeed: 60,
            speechWPM: 140,
            pauseKey: "Space",
            autoPauseOnInteraction: true,
            autoSync: true,
        }

        this.initUI();
        this.setupListeners();

    }

    setupListeners(): void {
        throw new Error("Method not implemented.");
    }
    initUI(): void {
        throw new Error("Method not implemented.");
    }
    pause(): void {
        throw new Error("Method not implemented.");
    }
    togglePause(): void {
        throw new Error("Method not implemented.");
    }
    resume(): void {
        throw new Error("Method not implemented.");
    }
    pauseUI(): void {
        throw new Error("Method not implemented.");
    }
    whilePaused(): void {
        throw new Error("Method not implemented.");
    }
    calculateSpeechDuration(text: string): void {
        throw new Error("Method not implemented.");
    }
    calculateTypingSpeed(tetxtLenght: number, targetDurationMs: number): void {
        throw new Error("Method not implemented.");
    }
    parseScript(waText: string): void {
        throw new Error("Method not implemented.");
    }
    play(): void {
        throw new Error("Method not implemented.");
    }
    executeStep(step: IStep): Promise<void> {
        throw new Error("Method not implemented.");
    }
    speak(text: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    spotlight(selector: string, message: string | number | null): void {
        throw new Error("Method not implemented.");
    }
    clearStoplight(): void {
        throw new Error("Method not implemented.");
    }
}