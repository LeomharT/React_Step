import Step01 from "../components/Step01";
import Step02 from "../components/Step02";
import Result from "../components/Result";

interface Roure
{
    title: string;
    components: any;
    path: string;
}

export const route: Roure[] = [

    { title: "Step01", components: Step01, path: "/step01" },
    { title: "Step02", components: Step02, path: "/step02" },
    { title: "Result", components: Result, path: "/result" }
];
