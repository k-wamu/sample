/** 関数式の場合、記述順に気を付ける */

type ExHuman = {
    height: number;
    weight: number;
};

const exUhyo: ExHuman = {height: 1.7, weight: 54};

// const calcBMI = function(human: ExHuman): number {
//     return human.weight / human.height ** 2;
// };
                /** 分割代入 */
const calcBMI = function({height, weight}: ExHuman): number {
    return weight / height ** 2;
}
console.log(calcBMI({ height: 1.7, weight: 54}));


/** アロー関数 */
const arrowBMI = ({height, weight}: ExHuman): number => {
    return weight / height ** 2;
};
console.log(arrowBMI(exUhyo));
//省略形
const omArrowBMI = ({height, weight}: ExHuman): number => weight / height ** 2;
console.log(omArrowBMI(exUhyo));

//戻り値がオブジェクトの場合
type ReturnObj = {
    bmi: number;
};

const calcBMIObj = ({height, weight}: ExHuman): ReturnObj => ({ 
    bmi: weight / height ** 2
});
console.log(calcBMIObj(exUhyo));