import "./NutritionFact.css"
const NutritionFact=()=>{
    return (
        <div className={"body"}>
            <div className="label">
                <header>
                     <h1>Nutrition Facts</h1>
                         <div className="divider">
                         </div>
                    <p className={"bold"}>8 servings per container</p>
                    <p>Serving size <span>2/3 cup (55g)</span></p>
                </header>
                    <div className="divider large">
                    </div>
                <div className="calories-info">
                    <div className="left-container">
                        <h2 className="bold small-text">Amount per serving</h2>
                        <p>Calories</p>
                    </div>
                    <span>230</span>
                </div>
                <div className="divider md">
                </div>
                <div className="daily-value small-text">
                    <p className="boldd">% Daily Value *</p>
                    <div className="divider"></div>
                    <p><span><span className="bold">Total Fat</span> 8g</span> <span className="bold">10%</span></p>
                    <hr/>
                    <p className="indent">Saturated Fat 1g <span className="bold">5%</span></p>
                    <hr/>
                    <p className="indent no-divider"><span><i>Trans</i> Fat 0g</span></p>
                    <hr/>
                    <p><span><span className="bold">Cholesterol</span> 0mg</span> <span className="bold">0%</span></p>
                    <hr/>
                    <p><span><span className="bold">Sodium</span> 160mg</span> <span className="bold">7%</span></p>
                    <hr/>
                    <p><span><span className="bold">Total Carbohydrate</span> 37g</span> <span className="bold">13%</span></p>
                    <p className="indent no-divider">Dietary Fiber 4g</p>
                    <div className="divider"></div>
                    <p className="indent no-divider">Total Sugars 12g</p>
                    <div className="divider"></div>
                    <p>Vitamin D 2mcg <span>10%</span></p>
                    <p>Calcium 260mg <span>20%</span></p>
                    <p>Iron 8mg <span>45%</span></p>
                    <p className="no-divider">Potassium 235mg <span>6%</span></p>
                    <div className="divider medium"></div>
                    <p className="note">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily
                        diet. 2,000 calories a day is used for general nutrition advice.</p>
                </div>
            </div>
        </div>
    )
}
export default NutritionFact