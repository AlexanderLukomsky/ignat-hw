import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useState,
    useRef
} from "react";
import classnames from "classnames";
import "./multiRangeSlider.css";

interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange: Function;
    value1: number,
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
    min,
    max,
    value1,
    onChange
}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);
    const getPercent = useCallback(
        (value: number) => Math.round(((value - value1) / (max - value1)) * 100),
        [min, max]
    );
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(value1);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [value1, getPercent]);
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(value1);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    return (
        <div className="container">
            <input
                type="range"
                min={min}
                max={max}
                value={value1}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal);
                    setMinVal(value);
                    onChange(value, maxVal)
                    event.target.value = value.toString();
                }}
                className={classnames("thumb thumb--zindex-3", {
                    "thumb--zindex-5": value1 > max - 100
                })}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, value1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                    onChange(value1, maxVal)
                }}
                className="thumb thumb--zindex-4"
            />

            <div className="slider">
                <div className="slider__track"></div>
                <div ref={range} className="slider__range"></div>
                <div className="slider__left-value">{value1}</div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
