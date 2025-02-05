let selected_dataset = "data1";
let selected_current = 0;
let selected_magnetic_field = 73;
let method = 1;
let selected_material = 'germanium';
let selected_thickness = 0.025;
let selected_field_current = 1;
var sel_data;
let selected_material_m3 = 'germanium';
let selected_thickness_m3 = 0.025;
let selected_field_current_m3 = 1;
let selected_b = 2166;
var sel_data2;
let data1 = [
    [0, 0],
    [0.1, 73],
    [0.2, 273],
    [0.3, 492],
    [0.4, 706],
    [0.5, 912],
    [0.6, 1133],
    [0.7, 1277],
    [0.8, 1445],
    [0.9, 1625],
    [1.0, 1888],
    [1.1, 2166],
    [1.2, 2300],
    [1.3, 2440],
    [1.4, 2660],
    [1.5, 2830],
    [1.6, 3090],
    [1.7, 3290],
    [1.8, 3500],
    [1.9, 3670],
    [2.0, 3910],
    [2.1, 4270],
    [2.2, 4670],
    [2.3, 4970],
    [2.4, 5100],
    [2.5, 5280],
    [2.6, 5480],
    [2.7, 5670],
    [2.8, 5840],
    [2.9, 5970],
    [3.0, 6150],
    [3.1, 6350],
    [3.2, 6440],
    [3.3, 6560],
    [3.4, 6710],
    [3.5, 6850]
];
let data2 = [
    {
        "probe": "germanium",
        "thickness": 0.025,
        "data": [
            [1, 0.1, 73, 2.1, 3.2, 4.2, 5.3, 6.4, 7.4, 8.5],
            [2, 0.2, 273, 7.9, 11.8, 15.7, 19.7, 23.6, 27.5, 31.5],
            [3, 0.3, 492, 14.5, 21.7, 28.9, 36.1, 43.4, 50.6, 57.8],
            [4, 0.4, 706, 20.9, 31.3, 41.7, 52.2, 62.6, 73.1, 83.5],
            [5, 0.5, 912, 26.6, 39.9, 53.2, 66.5, 79.8, 93.1, 106.4],
            [6, 0.6, 1133, 33.2, 49.9, 66.5, 83.1, 99.7, 116.3, 132.9],
            [7, 0.7, 1277, 37.1, 55.6, 74.1, 92.6, 111.2, 129.7, 148.2],
            [8, 0.8, 1445, 41.9, 62.8, 83.8, 104.7, 125.7, 146.6, 167.5],
            [9, 0.9, 1625, 46.9, 70.4, 93.9, 117.4, 140.8, 164.3, 187.8],
            [10, 1, 1888, 55.5, 83.2, 110.9, 138.7, 166.4, 194.1, 221.9],
            [11, 1.1, 2166, 63.0, 94.5, 126.0, 157.5, 189.0, 220.4, 251.9],
            [12, 1.2, 2300, 67.8, 101.7, 135.5, 169.4, 203.3, 237.2, 271.1],
            [13, 1.3, 2440, 70.7, 106.1, 141.4, 176.8, 212.1, 247.5, 282.8],
            [14, 1.4, 2660, 76.7, 115.1, 153.4, 191.8, 230.2, 268.5, 306.9],
            [15, 1.5, 2830, 83.3, 125.0, 166.7, 208.4, 250.0, 291.7, 333.4],
            [16, 1.6, 3090, 90.3, 135.4, 180.6, 225.7, 270.8, 316.0, 361.1],
            [17, 1.7, 3290, 94.9, 142.4, 189.8, 237.3, 284.8, 332.2, 379.7],
            [18, 1.8, 3500, 102.3, 153.5, 204.7, 255.9, 307.0, 358.2, 409.4],
            [19, 1.9, 3670, 107.8, 161.6, 215.5, 269.4, 323.3, 377.1, 431.0],
            [20, 2, 3910, 113.5, 170.3, 227.0, 283.8, 340.5, 397.3, 454.0],
            [21, 2.1, 4270, 125.1, 187.7, 250.3, 312.9, 375.4, 438.0, 500.6],
            [22, 2.2, 4670, 134.6, 201.8, 269.1, 336.4, 403.7, 470.9, 538.2],
            [23, 2.3, 4970, 146.6, 219.9, 293.2, 366.5, 439.8, 513.0, 586.3],
            [24, 2.4, 5100, 150.4, 225.5, 300.7, 375.9, 451.1, 526.3, 601.5],
            [25, 2.5, 5280, 153.8, 230.7, 307.6, 384.5, 461.4, 538.3, 615.1],
            [26, 2.6, 5480, 161.2, 241.8, 322.4, 403.0, 483.6, 564.1, 644.7],
            [27, 2.7, 5670, 163.4, 245.1, 326.8, 408.5, 490.2, 571.9, 653.6],
            [28, 2.8, 5840, 169.0, 253.5, 338.0, 422.6, 507.1, 591.6, 676.1],
            [29, 2.9, 5970, 175.2, 262.7, 350.3, 437.9, 525.5, 613.1, 700.6],
            [30, 3, 6150, 181.3, 271.9, 362.6, 453.2, 543.9, 634.5, 725.1],
            [31, 3.1, 6350, 187.0, 280.6, 374.1, 467.6, 561.1, 654.6, 748.2],
            [32, 3.2, 6440, 187.1, 280.6, 374.1, 467.6, 561.2, 654.7, 748.2],
            [33, 3.3, 6560, 192.2, 288.2, 384.3, 480.4, 576.5, 672.6, 768.7],
            [34, 3.4, 6710, 198.6, 297.8, 397.1, 496.4, 595.7, 694.9, 794.2],
            [35, 3.5, 6850, 201.7, 302.5, 403.3, 504.1, 605.0, 705.8, 806.6]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.025,
        "data": [
            [1, 0.1, 73, 0.00273, 0.00409, 0.00545, 0.00682, 0.00818, 0.00955, 0.01091],
            [2, 0.2, 273, 0.01019, 0.01529, 0.02039, 0.02548, 0.03058, 0.03568, 0.04077],
            [3, 0.3, 492, 0.01846, 0.02769, 0.03692, 0.04615, 0.05538, 0.06461, 0.07384],
            [4, 0.4, 706, 0.02642, 0.03963, 0.05284, 0.06605, 0.07926, 0.09247, 0.10568],
            [5, 0.5, 912, 0.03366, 0.05049, 0.06732, 0.08415, 0.10098, 0.11781, 0.13464],
            [6, 0.6, 1133, 0.04250, 0.06375, 0.08500, 0.10626, 0.12751, 0.14876, 0.17001],
            [7, 0.7, 1277, 0.04771, 0.07157, 0.09543, 0.11928, 0.14314, 0.16699, 0.19085],
            [8, 0.8, 1445, 0.05417, 0.08126, 0.10835, 0.13544, 0.16252, 0.18961, 0.21670],
            [9, 0.9, 1625, 0.05986, 0.08979, 0.11972, 0.14965, 0.17958, 0.20950, 0.23943],
            [10, 1, 1888, 0.07062, 0.10593, 0.14124, 0.17655, 0.21186, 0.24717, 0.28248],
            [11, 1.1, 2166, 0.08082, 0.12123, 0.16165, 0.20206, 0.24247, 0.28288, 0.32329],
            [12, 1.2, 2300, 0.08624, 0.12936, 0.17247, 0.21559, 0.25871, 0.30183, 0.34495],
            [13, 1.3, 2440, 0.09140, 0.13709, 0.18279, 0.22849, 0.27419, 0.31989, 0.36558],
            [14, 1.4, 2660, 0.09914, 0.14871, 0.19828, 0.24786, 0.29743, 0.34700, 0.39657],
            [15, 1.5, 2830, 0.10540, 0.15811, 0.21081, 0.26351, 0.31621, 0.36892, 0.42162],
            [16, 1.6, 3090, 0.11402, 0.17104, 0.22805, 0.28506, 0.34207, 0.39909, 0.45610],
            [17, 1.7, 3290, 0.12148, 0.18221, 0.24295, 0.30369, 0.36443, 0.42517, 0.48590],
            [18, 1.8, 3500, 0.13063, 0.19594, 0.26126, 0.32657, 0.39188, 0.45720, 0.52251],
            [19, 1.9, 3670, 0.13701, 0.20552, 0.27403, 0.34253, 0.41104, 0.47955, 0.54805],
            [20, 2, 3910, 0.14642, 0.21963, 0.29283, 0.36604, 0.43925, 0.51246, 0.58567],
            [21, 2.1, 4270, 0.15905, 0.23857, 0.31809, 0.39762, 0.47714, 0.55666, 0.63618],
            [22, 2.2, 4670, 0.17251, 0.25877, 0.34503, 0.43128, 0.51754, 0.60380, 0.69005],
            [23, 2.3, 4970, 0.18449, 0.27673, 0.36897, 0.46121, 0.55346, 0.64570, 0.73794],
            [24, 2.4, 5100, 0.18981, 0.28472, 0.37963, 0.47453, 0.56944, 0.66435, 0.75925],
            [25, 2.5, 5280, 0.19764, 0.29645, 0.39527, 0.49409, 0.59291, 0.69173, 0.79054],
            [26, 2.6, 5480, 0.20372, 0.30558, 0.40744, 0.50930, 0.61116, 0.71303, 0.81489],
            [27, 2.7, 5670, 0.20902, 0.31352, 0.41803, 0.52254, 0.62705, 0.73155, 0.83606],
            [28, 2.8, 5840, 0.21788, 0.32681, 0.43575, 0.54469, 0.65363, 0.76256, 0.87150],
            [29, 2.9, 5970, 0.22025, 0.33038, 0.44050, 0.55063, 0.66075, 0.77088, 0.88100],
            [30, 3, 6150, 0.22813, 0.34219, 0.45626, 0.57032, 0.68438, 0.79845, 0.91251],
            [31, 3.1, 6350, 0.23836, 0.35753, 0.47671, 0.59589, 0.71507, 0.83424, 0.95342],
            [32, 3.2, 6440, 0.23752, 0.35628, 0.47505, 0.59381, 0.71257, 0.83133, 0.95009],
            [33, 3.3, 6560, 0.24608, 0.36912, 0.49216, 0.61520, 0.73824, 0.86128, 0.98432],
            [34, 3.4, 6710, 0.24726, 0.37090, 0.49453, 0.61816, 0.74179, 0.86542, 0.98905],
            [35, 3.5, 6850, 0.25434, 0.38150, 0.50867, 0.63584, 0.76301, 0.89017, 1.01734]
        ]
    },
    {
        "probe": "germanium",
        "thickness": 0.05,
        "data": [
            [1, 0.1, 73, 1.1, 1.6, 2.1, 2.6, 3.2, 3.7, 4.2],
            [2, 0.2, 273, 3.9, 5.9, 7.9, 9.9, 11.8, 13.8, 15.8],
            [3, 0.3, 492, 7.2, 10.8, 14.4, 18.0, 21.6, 25.3, 28.9],
            [4, 0.4, 706, 10.4, 15.6, 20.8, 26.0, 31.2, 36.4, 41.6],
            [5, 0.5, 912, 13.4, 20.0, 26.7, 33.4, 40.1, 46.8, 53.4],
            [6, 0.6, 1133, 16.3, 24.5, 32.7, 40.8, 49.0, 57.2, 65.3],
            [7, 0.7, 1277, 18.9, 28.3, 37.7, 47.1, 56.6, 66.0, 75.4],
            [8, 0.8, 1445, 21.3, 32.0, 42.6, 53.3, 63.9, 74.6, 85.2],
            [9, 0.9, 1625, 24.0, 36.0, 48.1, 60.1, 72.1, 84.1, 96.1],
            [10, 1, 1888, 27.3, 40.9, 54.5, 68.1, 81.8, 95.4, 109.0],
            [11, 1.1, 2166, 31.9, 47.9, 63.9, 79.8, 95.8, 111.7, 127.7],
            [12, 1.2, 2300, 33.4, 50.2, 66.9, 83.6, 100.3, 117.0, 133.8],
            [13, 1.3, 2440, 35.2, 52.8, 70.3, 87.9, 105.5, 123.1, 140.7],
            [14, 1.4, 2660, 39.2, 58.8, 78.5, 98.1, 117.7, 137.3, 156.9],
            [15, 1.5, 2830, 41.7, 62.6, 83.4, 104.3, 125.1, 146.0, 166.8],
            [16, 1.6, 3090, 44.9, 67.4, 89.8, 112.3, 134.7, 157.2, 179.7],
            [17, 1.7, 3290, 47.8, 71.8, 95.7, 119.6, 143.5, 167.5, 191.4],
            [18, 1.8, 3500, 51.4, 77.1, 102.8, 128.5, 154.2, 179.9, 205.7],
            [19, 1.9, 3670, 53.6, 80.4, 107.1, 133.9, 160.7, 187.5, 214.3],
            [20, 2, 3910, 57.8, 86.7, 115.6, 144.5, 173.4, 202.3, 231.1],
            [21, 2.1, 4270, 62.1, 93.1, 124.2, 155.2, 186.2, 217.3, 248.3],
            [22, 2.2, 4670, 69.0, 103.5, 138.0, 172.5, 207.0, 241.5, 276.0],
            [23, 2.3, 4970, 72.6, 108.8, 145.1, 181.4, 217.7, 253.9, 290.2],
            [24, 2.4, 5100, 74.0, 111.0, 148.0, 185.0, 222.0, 259.0, 296.0],
            [25, 2.5, 5280, 76.4, 114.6, 152.8, 190.9, 229.1, 267.3, 305.5],
            [26, 2.6, 5480, 79.9, 119.9, 159.9, 199.9, 239.8, 279.8, 319.8],
            [27, 2.7, 5670, 82.9, 124.4, 165.9, 207.4, 248.8, 290.3, 331.8],
            [28, 2.8, 5840, 86.2, 129.3, 172.4, 215.5, 258.6, 301.7, 344.8],
            [29, 2.9, 5970, 87.9, 131.8, 175.8, 219.7, 263.6, 307.6, 351.5],
            [30, 3, 6150, 90.8, 136.2, 181.6, 227.0, 272.4, 317.8, 363.2],
            [31, 3.1, 6350, 92.6, 138.9, 185.3, 231.6, 277.9, 324.2, 370.5],
            [32, 3.2, 6440, 93.7, 140.5, 187.3, 234.2, 281.0, 327.8, 374.6],
            [33, 3.3, 6560, 95.5, 143.3, 191.0, 238.8, 286.6, 334.3, 382.1],
            [34, 3.4, 6710, 96.9, 145.3, 193.7, 242.1, 290.6, 339.0, 387.4],
            [35, 3.5, 6850, 100.8, 151.2, 201.7, 252.1, 302.5, 352.9, 403.3]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.05,
        "data": [
            [1, 0.1, 73, 0.00137, 0.00206, 0.00274, 0.00343, 0.00412, 0.00480, 0.00549],
            [2, 0.2, 273, 0.00512, 0.00768, 0.01024, 0.01280, 0.01536, 0.01792, 0.02048],
            [3, 0.3, 492, 0.00906, 0.01359, 0.01813, 0.02266, 0.02719, 0.03172, 0.03625],
            [4, 0.4, 706, 0.01302, 0.01953, 0.02603, 0.03254, 0.03905, 0.04556, 0.05207],
            [5, 0.5, 912, 0.01698, 0.02547, 0.03396, 0.04245, 0.05094, 0.05944, 0.06793],
            [6, 0.6, 1133, 0.02090, 0.03135, 0.04180, 0.05225, 0.06270, 0.07315, 0.08360],
            [7, 0.7, 1277, 0.02396, 0.03593, 0.04791, 0.05989, 0.07187, 0.08385, 0.09583],
            [8, 0.8, 1445, 0.02672, 0.04008, 0.05344, 0.06680, 0.08016, 0.09352, 0.10688],
            [9, 0.9, 1625, 0.03007, 0.04511, 0.06015, 0.07518, 0.09022, 0.10525, 0.12029],
            [10, 1, 1888, 0.03533, 0.05300, 0.07066, 0.08833, 0.10599, 0.12366, 0.14132],
            [11, 1.1, 2166, 0.04052, 0.06078, 0.08104, 0.10130, 0.12156, 0.14182, 0.16208],
            [12, 1.2, 2300, 0.04298, 0.06447, 0.08596, 0.10745, 0.12894, 0.15043, 0.17192],
            [13, 1.3, 2440, 0.04577, 0.06865, 0.09153, 0.11442, 0.13730, 0.16018, 0.18307],
            [14, 1.4, 2660, 0.04932, 0.07398, 0.09864, 0.12330, 0.14796, 0.17262, 0.19728],
            [15, 1.5, 2830, 0.05224, 0.07836, 0.10448, 0.13060, 0.15672, 0.18283, 0.20895],
            [16, 1.6, 3090, 0.05725, 0.08588, 0.11450, 0.14313, 0.17176, 0.20038, 0.22901],
            [17, 1.7, 3290, 0.06180, 0.09269, 0.12359, 0.15449, 0.18539, 0.21628, 0.24718],
            [18, 1.8, 3500, 0.06450, 0.09675, 0.12900, 0.16125, 0.19351, 0.22576, 0.25801],
            [19, 1.9, 3670, 0.06836, 0.10254, 0.13672, 0.17090, 0.20508, 0.23926, 0.27343],
            [20, 2, 3910, 0.07338, 0.11007, 0.14676, 0.18345, 0.22014, 0.25683, 0.29352],
            [21, 2.1, 4270, 0.08025, 0.12037, 0.16050, 0.20062, 0.24074, 0.28087, 0.32099],
            [22, 2.2, 4670, 0.08632, 0.12948, 0.17264, 0.21580, 0.25896, 0.30212, 0.34528],
            [23, 2.3, 4970, 0.09258, 0.13887, 0.18516, 0.23145, 0.27773, 0.32402, 0.37031],
            [24, 2.4, 5100, 0.09559, 0.14338, 0.19117, 0.23896, 0.28676, 0.33455, 0.38234],
            [25, 2.5, 5280, 0.09749, 0.14624, 0.19498, 0.24373, 0.29247, 0.34122, 0.38996],
            [26, 2.6, 5480, 0.10111, 0.15166, 0.20221, 0.25276, 0.30332, 0.35387, 0.40442],
            [27, 2.7, 5670, 0.10470, 0.15706, 0.20941, 0.26176, 0.31411, 0.36646, 0.41881],
            [28, 2.8, 5840, 0.10899, 0.16348, 0.21798, 0.27247, 0.32696, 0.38146, 0.43595],
            [29, 2.9, 5970, 0.11164, 0.16746, 0.22328, 0.27910, 0.33492, 0.39074, 0.44656],
            [30, 3, 6150, 0.11362, 0.17043, 0.22725, 0.28406, 0.34087, 0.39768, 0.45449],
            [31, 3.1, 6350, 0.11798, 0.17697, 0.23595, 0.29494, 0.35393, 0.41292, 0.47191],
            [32, 3.2, 6440, 0.12046, 0.18069, 0.24092, 0.30115, 0.36138, 0.42161, 0.48184],
            [33, 3.3, 6560, 0.12202, 0.18304, 0.24405, 0.30506, 0.36607, 0.42708, 0.48810],
            [34, 3.4, 6710, 0.12599, 0.18899, 0.25199, 0.31499, 0.37798, 0.44098, 0.50398],
            [35, 3.5, 6850, 0.12701, 0.19052, 0.25403, 0.31754, 0.38104, 0.44455, 0.50806]
        ]
    },
    {
        "probe": "germanium",
        "thickness": 0.075,
        "data": [
            [1, 0.1, 73, 0.7, 1.1, 1.4, 1.8, 2.1, 2.5, 2.8],
            [2, 0.2, 273, 2.7, 4.0, 5.3, 6.6, 8.0, 9.3, 10.6],
            [3, 0.3, 492, 4.8, 7.3, 9.7, 12.1, 14.5, 16.9, 19.4],
            [4, 0.4, 706, 6.9, 10.3, 13.8, 17.2, 20.7, 24.1, 27.6],
            [5, 0.5, 912, 8.8, 13.2, 17.7, 22.1, 26.5, 30.9, 35.3],
            [6, 0.6, 1133, 11.0, 16.5, 22.0, 27.5, 33.0, 38.5, 44.0],
            [7, 0.7, 1277, 12.3, 18.4, 24.6, 30.7, 36.9, 43.0, 49.1],
            [8, 0.8, 1445, 13.9, 20.8, 27.8, 34.7, 41.6, 48.6, 55.5],
            [9, 0.9, 1625, 15.9, 23.8, 31.7, 39.7, 47.6, 55.5, 63.5],
            [10, 1, 1888, 18.1, 27.2, 36.3, 45.4, 54.4, 63.5, 72.6],
            [11, 1.1, 2166, 21.1, 31.7, 42.2, 52.8, 63.3, 73.9, 84.4],
            [12, 1.2, 2300, 22.1, 33.2, 44.3, 55.4, 66.4, 77.5, 88.6],
            [13, 1.3, 2440, 23.9, 35.8, 47.8, 59.7, 71.7, 83.6, 95.6],
            [14, 1.4, 2660, 26.1, 39.1, 52.1, 65.2, 78.2, 91.2, 104.3],
            [15, 1.5, 2830, 27.2, 40.9, 54.5, 68.1, 81.7, 95.4, 109.0],
            [16, 1.6, 3090, 30.2, 45.4, 60.5, 75.6, 90.7, 105.9, 121.0],
            [17, 1.7, 3290, 32.1, 48.2, 64.2, 80.3, 96.4, 112.4, 128.5],
            [18, 1.8, 3500, 33.9, 50.9, 67.9, 84.9, 101.8, 118.8, 135.8],
            [19, 1.9, 3670, 35.7, 53.6, 71.4, 89.3, 107.1, 125.0, 142.8],
            [20, 2, 3910, 38.2, 57.3, 76.5, 95.6, 114.7, 133.8, 152.9],
            [21, 2.1, 4270, 41.6, 62.4, 83.2, 104.0, 124.8, 145.6, 166.4],
            [22, 2.2, 4670, 45.2, 67.8, 90.4, 113.0, 135.6, 158.2, 180.8],
            [23, 2.3, 4970, 48.2, 72.3, 96.4, 120.5, 144.6, 168.7, 192.8],
            [24, 2.4, 5100, 49.7, 74.5, 99.4, 124.2, 149.0, 173.9, 198.7],
            [25, 2.5, 5280, 51.1, 76.7, 102.3, 127.8, 153.4, 179.0, 204.5],
            [26, 2.6, 5480, 53.9, 80.9, 107.8, 134.8, 161.7, 188.7, 215.7],
            [27, 2.7, 5670, 54.8, 82.2, 109.6, 137.0, 164.4, 191.7, 219.1],
            [28, 2.8, 5840, 57.5, 86.3, 115.1, 143.9, 172.6, 201.4, 230.2],
            [29, 2.9, 5970, 57.7, 86.5, 115.4, 144.2, 173.1, 201.9, 230.8],
            [30, 3, 6150, 60.1, 90.2, 120.3, 150.4, 180.4, 210.5, 240.6],
            [31, 3.1, 6350, 61.2, 91.8, 122.5, 153.1, 183.7, 214.3, 244.9],
            [32, 3.2, 6440, 62.5, 93.7, 125.0, 156.2, 187.5, 218.7, 250.0],
            [33, 3.3, 6560, 63.1, 94.6, 126.1, 157.7, 189.2, 220.8, 252.3],
            [34, 3.4, 6710, 65.5, 98.2, 131.0, 163.7, 196.4, 229.2, 261.9],
            [35, 3.5, 6850, 67.0, 100.5, 134.0, 167.5, 200.9, 234.4, 267.9]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.075,
        "data": [
            [1, 0.1, 73, 0.00091, 0.00137, 0.00183, 0.00229, 0.00274, 0.00320, 0.00366],
            [2, 0.2, 273, 0.00341, 0.00511, 0.00681, 0.00852, 0.01022, 0.01193, 0.01363],
            [3, 0.3, 492, 0.00613, 0.00919, 0.01226, 0.01532, 0.01839, 0.02145, 0.02452],
            [4, 0.4, 706, 0.00881, 0.01322, 0.01763, 0.02203, 0.02644, 0.03085, 0.03525],
            [5, 0.5, 912, 0.01124, 0.01687, 0.02249, 0.02811, 0.03373, 0.03936, 0.04498],
            [6, 0.6, 1133, 0.01411, 0.02116, 0.02821, 0.03526, 0.04232, 0.04937, 0.05642],
            [7, 0.7, 1277, 0.01595, 0.02392, 0.03189, 0.03987, 0.04784, 0.05581, 0.06379],
            [8, 0.8, 1445, 0.01800, 0.02700, 0.03600, 0.04500, 0.05400, 0.06300, 0.07200],
            [9, 0.9, 1625, 0.02002, 0.03003, 0.04004, 0.05005, 0.06006, 0.07007, 0.08007],
            [10, 1, 1888, 0.02333, 0.03500, 0.04667, 0.05834, 0.07000, 0.08167, 0.09334],
            [11, 1.1, 2166, 0.02688, 0.04032, 0.05376, 0.06721, 0.08065, 0.09409, 0.10753],
            [12, 1.2, 2300, 0.02853, 0.04280, 0.05706, 0.07133, 0.08560, 0.09986, 0.11413],
            [13, 1.3, 2440, 0.03025, 0.04537, 0.06049, 0.07561, 0.09074, 0.10586, 0.12098],
            [14, 1.4, 2660, 0.03289, 0.04933, 0.06578, 0.08222, 0.09867, 0.11511, 0.13155],
            [15, 1.5, 2830, 0.03489, 0.05233, 0.06978, 0.08722, 0.10467, 0.12211, 0.13956],
            [16, 1.6, 3090, 0.03807, 0.05711, 0.07614, 0.09518, 0.11421, 0.13325, 0.15228],
            [17, 1.7, 3290, 0.04084, 0.06126, 0.08168, 0.10210, 0.12252, 0.14294, 0.16336],
            [18, 1.8, 3500, 0.04382, 0.06572, 0.08763, 0.10954, 0.13145, 0.15336, 0.17526],
            [19, 1.9, 3670, 0.04564, 0.06846, 0.09128, 0.11410, 0.13691, 0.15973, 0.18255],
            [20, 2, 3910, 0.04882, 0.07323, 0.09764, 0.12205, 0.14647, 0.17088, 0.19529],
            [21, 2.1, 4270, 0.05270, 0.07905, 0.10541, 0.13176, 0.15811, 0.18446, 0.21081],
            [22, 2.2, 4670, 0.05843, 0.08765, 0.11687, 0.14608, 0.17530, 0.20452, 0.23373],
            [23, 2.3, 4970, 0.06224, 0.09335, 0.12447, 0.15559, 0.18671, 0.21782, 0.24894],
            [24, 2.4, 5100, 0.06370, 0.09555, 0.12740, 0.15924, 0.19109, 0.22294, 0.25479],
            [25, 2.5, 5280, 0.06518, 0.09777, 0.13035, 0.16294, 0.19553, 0.22812, 0.26071],
            [26, 2.6, 5480, 0.06801, 0.10201, 0.13602, 0.17002, 0.20402, 0.23803, 0.27203],
            [27, 2.7, 5670, 0.07089, 0.10633, 0.14178, 0.17722, 0.21267, 0.24811, 0.28355],
            [28, 2.8, 5840, 0.07220, 0.10830, 0.14441, 0.18051, 0.21661, 0.25271, 0.28881],
            [29, 2.9, 5970, 0.07432, 0.11148, 0.14864, 0.18581, 0.22297, 0.26013, 0.29729],
            [30, 3, 6150, 0.07619, 0.11428, 0.15237, 0.19046, 0.22856, 0.26665, 0.30474],
            [31, 3.1, 6350, 0.07909, 0.11864, 0.15818, 0.19773, 0.23728, 0.27682, 0.31637],
            [32, 3.2, 6440, 0.07945, 0.11918, 0.15891, 0.19864, 0.23836, 0.27809, 0.31782],
            [33, 3.3, 6560, 0.08091, 0.12137, 0.16183, 0.20229, 0.24274, 0.28320, 0.32366],
            [34, 3.4, 6710, 0.08387, 0.12581, 0.16774, 0.20968, 0.25162, 0.29355, 0.33549],
            [35, 3.5, 6850, 0.08534, 0.12802, 0.17069, 0.21336, 0.25603, 0.29870, 0.34137]
        ]
    },
    {
        "probe": "germanium",
        "thickness": 0.1,
        "data": [
            [1, 0.1, 73, 0.53, 0.80, 1.06, 1.33, 1.59, 1.86, 2.12],
            [2, 0.2, 273, 2.01, 3.01, 4.02, 5.02, 6.03, 7.03, 8.04],
            [3, 0.3, 492, 3.60, 5.40, 7.20, 9.00, 10.80, 12.60, 14.40],
            [4, 0.4, 706, 5.17, 7.76, 10.35, 12.93, 15.52, 18.10, 20.69],
            [5, 0.5, 912, 6.58, 9.88, 13.17, 16.46, 19.75, 23.04, 26.33],
            [6, 0.6, 1133, 8.23, 12.35, 16.46, 20.58, 24.69, 28.81, 32.92],
            [7, 0.7, 1277, 9.27, 13.91, 18.54, 23.18, 27.81, 32.45, 37.08],
            [8, 0.8, 1445, 10.54, 15.82, 21.09, 26.36, 31.63, 36.91, 42.18],
            [9, 0.9, 1625, 12.02, 18.04, 24.05, 30.06, 36.07, 42.09, 48.10],
            [10, 1, 1888, 13.65, 20.48, 27.30, 34.13, 40.95, 47.78, 54.60],
            [11, 1.1, 2166, 15.99, 23.99, 31.99, 39.99, 47.98, 55.98, 63.98],
            [12, 1.2, 2300, 16.82, 25.23, 33.64, 42.05, 50.46, 58.87, 67.28],
            [13, 1.3, 2440, 18.01, 27.01, 36.01, 45.01, 54.02, 63.02, 72.02],
            [14, 1.4, 2660, 19.55, 29.33, 39.10, 48.88, 58.66, 68.43, 78.21],
            [15, 1.5, 2830, 20.87, 31.30, 41.73, 52.17, 62.60, 73.03, 83.46],
            [16, 1.6, 3090, 22.26, 33.39, 44.52, 55.65, 66.78, 77.91, 89.04],
            [17, 1.7, 3290, 23.76, 35.64, 47.52, 59.40, 71.28, 83.16, 95.04],
            [18, 1.8, 3500, 25.49, 38.23, 50.97, 63.71, 76.46, 89.20, 101.94],
            [19, 1.9, 3670, 27.03, 40.55, 54.07, 67.58, 81.10, 94.62, 108.13],
            [20, 2, 3910, 28.60, 42.91, 57.21, 71.51, 85.81, 100.11, 114.42],
            [21, 2.1, 4270, 31.59, 47.38, 63.17, 78.96, 94.76, 110.55, 126.34],
            [22, 2.2, 4670, 33.95, 50.93, 67.91, 84.88, 101.86, 118.83, 135.81],
            [23, 2.3, 4970, 35.83, 53.75, 71.67, 89.59, 107.50, 125.42, 143.34],
            [24, 2.4, 5100, 37.31, 55.96, 74.62, 93.27, 111.92, 130.58, 149.23],
            [25, 2.5, 5280, 38.47, 57.71, 76.95, 96.18, 115.42, 134.66, 153.90],
            [26, 2.6, 5480, 40.37, 60.55, 80.74, 100.92, 121.11, 141.29, 161.47],
            [27, 2.7, 5670, 41.31, 61.97, 82.63, 103.28, 123.94, 144.60, 165.25],
            [28, 2.8, 5840, 42.87, 64.30, 85.74, 107.17, 128.61, 150.04, 171.48],
            [29, 2.9, 5970, 43.28, 64.92, 86.56, 108.21, 129.85, 151.49, 173.13],
            [30, 3, 6150, 44.47, 66.70, 88.94, 111.17, 133.41, 155.64, 177.88],
            [31, 3.1, 6350, 46.27, 69.41, 92.54, 115.68, 138.81, 161.95, 185.08],
            [32, 3.2, 6440, 47.32, 70.98, 94.64, 118.29, 141.95, 165.61, 189.27],
            [33, 3.3, 6560, 47.32, 70.98, 94.64, 118.30, 141.96, 165.62, 189.28],
            [34, 3.4, 6710, 48.35, 72.52, 96.69, 120.87, 145.04, 169.21, 193.38],
            [35, 3.5, 6850, 49.93, 74.89, 99.85, 124.81, 149.78, 174.74, 199.70]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.1,
        "data": [
            [1, 0.1, 73, 0.00068, 0.00101, 0.00135, 0.00169, 0.00203, 0.00237, 0.00271],
            [2, 0.2, 273, 0.00256, 0.00384, 0.00512, 0.00641, 0.00769, 0.00897, 0.01025],
            [3, 0.3, 492, 0.00456, 0.00684, 0.00912, 0.01140, 0.01368, 0.01595, 0.01823],
            [4, 0.4, 706, 0.00662, 0.00994, 0.01325, 0.01656, 0.01987, 0.02318, 0.02650],
            [5, 0.5, 912, 0.00857, 0.01285, 0.01714, 0.02142, 0.02571, 0.02999, 0.03428],
            [6, 0.6, 1133, 0.01063, 0.01594, 0.02126, 0.02657, 0.03188, 0.03720, 0.04251],
            [7, 0.7, 1277, 0.01191, 0.01786, 0.02381, 0.02976, 0.03572, 0.04167, 0.04762],
            [8, 0.8, 1445, 0.01350, 0.02025, 0.02700, 0.03374, 0.04049, 0.04724, 0.05399],
            [9, 0.9, 1625, 0.01510, 0.02265, 0.03020, 0.03775, 0.04531, 0.05286, 0.06041],
            [10, 1, 1888, 0.01742, 0.02614, 0.03485, 0.04356, 0.05227, 0.06099, 0.06970],
            [11, 1.1, 2166, 0.02020, 0.03030, 0.04040, 0.05050, 0.06060, 0.07070, 0.08081],
            [12, 1.2, 2300, 0.02126, 0.03189, 0.04252, 0.05315, 0.06378, 0.07441, 0.08504],
            [13, 1.3, 2440, 0.02247, 0.03371, 0.04495, 0.05618, 0.06742, 0.07866, 0.08989],
            [14, 1.4, 2660, 0.02482, 0.03723, 0.04964, 0.06205, 0.07446, 0.08687, 0.09928],
            [15, 1.5, 2830, 0.02614, 0.03921, 0.05228, 0.06536, 0.07843, 0.09150, 0.10457],
            [16, 1.6, 3090, 0.02887, 0.04330, 0.05773, 0.07216, 0.08660, 0.10103, 0.11546],
            [17, 1.7, 3290, 0.03054, 0.04582, 0.06109, 0.07636, 0.09163, 0.10691, 0.12218],
            [18, 1.8, 3500, 0.03283, 0.04924, 0.06566, 0.08207, 0.09848, 0.11490, 0.13131],
            [19, 1.9, 3670, 0.03395, 0.05092, 0.06790, 0.08487, 0.10185, 0.11882, 0.13580],
            [20, 2, 3910, 0.03659, 0.05489, 0.07318, 0.09148, 0.10977, 0.12807, 0.14637],
            [21, 2.1, 4270, 0.03983, 0.05975, 0.07967, 0.09959, 0.11950, 0.13942, 0.15934],
            [22, 2.2, 4670, 0.04357, 0.06536, 0.08715, 0.10893, 0.13072, 0.15250, 0.17429],
            [23, 2.3, 4970, 0.04656, 0.06984, 0.09312, 0.11641, 0.13969, 0.16297, 0.18625],
            [24, 2.4, 5100, 0.04766, 0.07149, 0.09532, 0.11916, 0.14299, 0.16682, 0.19065],
            [25, 2.5, 5280, 0.04873, 0.07310, 0.09746, 0.12183, 0.14619, 0.17056, 0.19492],
            [26, 2.6, 5480, 0.05099, 0.07648, 0.10197, 0.12747, 0.15296, 0.17845, 0.20395],
            [27, 2.7, 5670, 0.05323, 0.07984, 0.10646, 0.13307, 0.15969, 0.18630, 0.21292],
            [28, 2.8, 5840, 0.05423, 0.08135, 0.10847, 0.13558, 0.16270, 0.18982, 0.21693],
            [29, 2.9, 5970, 0.05518, 0.08277, 0.11037, 0.13796, 0.16555, 0.19314, 0.22073],
            [30, 3, 6150, 0.05739, 0.08609, 0.11479, 0.14348, 0.17218, 0.20087, 0.22957],
            [31, 3.1, 6350, 0.05883, 0.08824, 0.11766, 0.14707, 0.17649, 0.20590, 0.23532],
            [32, 3.2, 6440, 0.06016, 0.09024, 0.12031, 0.15039, 0.18047, 0.21055, 0.24063],
            [33, 3.3, 6560, 0.06041, 0.09061, 0.12081, 0.15102, 0.18122, 0.21142, 0.24163],
            [34, 3.4, 6710, 0.06299, 0.09449, 0.12599, 0.15748, 0.18898, 0.22048, 0.25198],
            [35, 3.5, 6850, 0.06427, 0.09641, 0.12854, 0.16068, 0.19281, 0.22495, 0.25708]
        ]
    }
];
let data3 = [
    {
        "probe": "germanium",
        "thickness": 0.025,
        "data": [
            [1, 0.5, 6.5, 13.5, 23.0],
            [2, 1, 13.3, 28.0, 45.7],
            [3, 1.5, 20.2, 42.5, 68.3],
            [4, 2, 27.0, 57.0, 91.0],
            [5, 2.5, 33.8, 71.5, 113.7],
            [6, 3, 40.7, 86.0, 136.3],
            [7, 3.5, 47.5, 100.5, 159.0],
            [8, 4, 54.3, 115.0, 181.6],
            [9, 4.5, 61.2, 129.5, 204.3],
            [10, 5, 68.0, 144.0, 227.0],
            [11, 5.5, 74.8, 158.5, 249.6],
            [12, 6, 81.6, 173.0, 272.3],
            [13, 6.5, 88.5, 187.5, 294.9],
            [14, 7, 95.3, 202.0, 317.6],
            [15, 7.5, 102.1, 216.5, 340.3],
            [16, 8, 109.0, 231.0, 362.9],
            [17, 8.5, 115.8, 245.5, 385.6],
            [18, 9, 122.6, 260.0, 408.2],
            [19, 9.5, 129.5, 274.5, 430.9],
            [20, 10, 136.3, 289.0, 453.6],
            [21, 10.5, 143.1, 303.5, 476.2],
            [22, 11, 149.9, 318.0, 498.9],
            [23, 11.5, 156.8, 332.5, 521.5],
            [24, 12, 163.6, 347.0, 544.2],
            [25, 12.5, 170.4, 361.5, 566.9],
            [26, 13, 177.3, 376.0, 589.5],
            [27, 13.5, 184.1, 390.5, 612.2],
            [28, 14, 190.9, 405.0, 634.8],
            [29, 14.5, 197.8, 419.5, 657.5],
            [30, 15, 204.6, 434.0, 680.2]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.025,
        "data": [
            [1, 0.5, 0.00886, 0.01830, 0.02840],
            [2, 1, 0.01769, 0.03665, 0.05680],
            [3, 1.5, 0.02652, 0.05500, 0.08520],
            [4, 2, 0.03535, 0.07335, 0.11360],
            [5, 2.5, 0.04418, 0.09170, 0.14200],
            [6, 3, 0.05301, 0.11005, 0.17040],
            [7, 3.5, 0.06184, 0.12840, 0.19880],
            [8, 4, 0.07067, 0.14675, 0.22720],
            [9, 4.5, 0.07950, 0.16510, 0.25560],
            [10, 5, 0.08833, 0.18345, 0.28400],
            [11, 5.5, 0.09716, 0.20180, 0.31240],
            [12, 6, 0.10599, 0.22015, 0.34080],
            [13, 6.5, 0.11482, 0.23850, 0.36920],
            [14, 7, 0.12365, 0.25685, 0.39760],
            [15, 7.5, 0.13248, 0.27520, 0.42600],
            [16, 8, 0.14131, 0.29355, 0.45440],
            [17, 8.5, 0.15014, 0.31190, 0.48280],
            [18, 9, 0.15897, 0.33025, 0.51120],
            [19, 9.5, 0.16780, 0.34860, 0.53960],
            [20, 10, 0.17663, 0.36695, 0.56800],
            [21, 10.5, 0.18546, 0.38530, 0.59640],
            [22, 11, 0.19429, 0.40365, 0.62480],
            [23, 11.5, 0.20312, 0.42200, 0.65320],
            [24, 12, 0.21195, 0.44035, 0.68160],
            [25, 12.5, 0.22078, 0.45870, 0.71000],
            [26, 13, 0.22961, 0.47705, 0.73840],
            [27, 13.5, 0.23844, 0.49540, 0.76680],
            [28, 14, 0.24727, 0.51375, 0.79520],
            [29, 14.5, 0.25610, 0.53210, 0.82360],
            [30, 15, 0.26493, 0.55045, 0.85200]
        ]
    },
    {
        "probe": "germanium",
        "thickness": 0.050,
        "data": [
            [1, 0.5, 7.5, 16.0, 23.0],
            [2, 1, 14.3, 30.3, 45.7],
            [3, 1.5, 21.2, 44.7, 68.3],
            [4, 2, 28.0, 59.0, 91.0],
            [5, 2.5, 33.8, 73.3, 113.7],
            [6, 3, 40.7, 87.7, 136.3],
            [7, 3.5, 47.5, 102.0, 159.0],
            [8, 4, 54.3, 116.3, 181.7],
            [9, 4.5, 61.2, 130.7, 204.3],
            [10, 5, 68.0, 145.0, 227.0],
            [11, 5.5, 74.8, 159.3, 249.7],
            [12, 6, 81.7, 173.7, 272.3],
            [13, 6.5, 88.5, 188.0, 295.0],
            [14, 7, 95.3, 202.3, 317.7],
            [15, 7.5, 102.2, 216.7, 340.3],
            [16, 8, 109.0, 231.0, 363.0],
            [17, 8.5, 115.8, 245.3, 385.7],
            [18, 9, 122.7, 259.7, 408.3],
            [19, 9.5, 129.5, 274.0, 431.0],
            [20, 10, 136.3, 288.3, 453.7],
            [21, 10.5, 143.2, 302.7, 476.3],
            [22, 11, 150.0, 317.0, 499.0],
            [23, 11.5, 156.8, 331.3, 521.7],
            [24, 12, 163.7, 345.7, 544.3],
            [25, 12.5, 170.5, 360.0, 567.0],
            [26, 13, 177.3, 374.3, 589.7],
            [27, 13.5, 184.2, 388.7, 612.3],
            [28, 14, 191.0, 403.0, 635.0],
            [29, 14.5, 197.8, 417.3, 657.7],
            [30, 15, 204.7, 431.7, 680.3]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.050,
        "data": [
            [1, 0.5, 0.00362, 0.03676, 0.02840],
            [2, 1, 0.00604, 0.04898, 0.05680],
            [3, 1.5, 0.01570, 0.06120, 0.08520],
            [4, 2, 0.02536, 0.07342, 0.11360],
            [5, 2.5, 0.03502, 0.08564, 0.14200],
            [6, 3, 0.04468, 0.09786, 0.17040],
            [7, 3.5, 0.05435, 0.11008, 0.19880],
            [8, 4, 0.06401, 0.12230, 0.22720],
            [9, 4.5, 0.07367, 0.13452, 0.25560],
            [10, 5, 0.08333, 0.14674, 0.28400],
            [11, 5.5, 0.09299, 0.17120, 0.31240],
            [12, 6, 0.10265, 0.19566, 0.34080],
            [13, 6.5, 0.11232, 0.22012, 0.36920],
            [14, 7, 0.12198, 0.24458, 0.39760],
            [15, 7.5, 0.13164, 0.26904, 0.42600],
            [16, 8, 0.14130, 0.29350, 0.45440],
            [17, 8.5, 0.15096, 0.31796, 0.48280],
            [18, 9, 0.16062, 0.34242, 0.51120],
            [19, 9.5, 0.17028, 0.36688, 0.53960],
            [20, 10, 0.17995, 0.39134, 0.56800],
            [21, 10.5, 0.18961, 0.41580, 0.59640],
            [22, 11, 0.19927, 0.44026, 0.62480],
            [23, 11.5, 0.20893, 0.46472, 0.65320],
            [24, 12, 0.21859, 0.48918, 0.68160],
            [25, 12.5, 0.22825, 0.51364, 0.71000],
            [26, 13, 0.23792, 0.53810, 0.73840],
            [27, 13.5, 0.24758, 0.56256, 0.76680],
            [28, 14, 0.25724, 0.58702, 0.79520],
            [29, 14.5, 0.26690, 0.61148, 0.82360],
            [30, 15, 0.27656, 0.63594, 0.85200]
        ]
    },
    {
        "probe": "germanium",
        "thickness": 0.075,
        "data": [
            [1, 0.5, 4.5, 9.5, 15.0],
            [2, 1, 9.0, 19.1, 30.0],
            [3, 1.5, 13.6, 28.6, 45.1],
            [4, 2, 18.1, 38.2, 60.1],
            [5, 2.5, 22.6, 47.8, 75.1],
            [6, 3, 27.2, 57.3, 90.2],
            [7, 3.5, 31.7, 66.9, 105.2],
            [8, 4, 36.3, 76.4, 120.3],
            [9, 4.5, 40.8, 86.0, 135.3],
            [10, 5, 45.4, 95.6, 150.4],
            [11, 5.5, 49.9, 105.1, 165.4],
            [12, 6, 54.4, 114.7, 180.4],
            [13, 6.5, 59.0, 124.2, 195.5],
            [14, 7, 63.5, 133.8, 210.5],
            [15, 7.5, 68.1, 143.3, 225.6],
            [16, 8, 72.6, 152.9, 240.6],
            [17, 8.5, 77.1, 162.5, 255.6],
            [18, 9, 81.7, 172.0, 255.6],
            [19, 9.5, 86.2, 181.6, 255.6],
            [20, 10, 90.8, 191.1, 255.6],
            [21, 10.5, 95.3, 200.7, 255.6],
            [22, 11, 99.8, 210.2, 255.6],
            [23, 11.5, 104.4, 219.8, 255.6],
            [24, 12, 108.9, 229.4, 255.6],
            [25, 12.5, 113.5, 238.9, 255.6],
            [26, 13, 118.0, 248.5, 255.6],
            [27, 13.5, 122.6, 258.0, 255.6],
            [28, 14, 127.1, 267.6, 255.6],
            [29, 14.5, 131.6, 277.2, 255.6],
            [30, 15, 136.2, 286.7, 255.6]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.075,
        "data": [
            [1, 0.5, 0.00583, 0.01223, 0.01906],
            [2, 1, 0.01166, 0.02442, 0.03811],
            [3, 1.5, 0.01750, 0.03662, 0.05715],
            [4, 2, 0.02333, 0.04882, 0.07619],
            [5, 2.5, 0.02916, 0.06102, 0.09523],
            [6, 3, 0.03500, 0.07322, 0.11428],
            [7, 3.5, 0.04083, 0.08542, 0.13332],
            [8, 4, 0.04667, 0.09761, 0.15236],
            [9, 4.5, 0.05250, 0.10981, 0.17140],
            [10, 5, 0.05833, 0.12201, 0.19045],
            [11, 5.5, 0.06417, 0.13421, 0.20949],
            [12, 6, 0.07000, 0.14641, 0.22853],
            [13, 6.5, 0.07584, 0.15861, 0.24757],
            [14, 7, 0.08167, 0.17080, 0.26662],
            [15, 7.5, 0.08751, 0.18300, 0.28566],
            [16, 8, 0.09334, 0.19520, 0.30470],
            [17, 8.5, 0.09917, 0.20740, 0.32374],
            [18, 9, 0.10501, 0.21960, 0.34279],
            [19, 9.5, 0.11084, 0.23179, 0.36183],
            [20, 10, 0.11668, 0.24399, 0.38087],
            [21, 10.5, 0.12251, 0.25619, 0.39991],
            [22, 11, 0.12835, 0.26839, 0.41896],
            [23, 11.5, 0.13418, 0.28059, 0.43800],
            [24, 12, 0.14001, 0.29279, 0.45704],
            [25, 12.5, 0.14585, 0.30498, 0.47608],
            [26, 13, 0.15168, 0.31718, 0.49513],
            [27, 13.5, 0.15752, 0.32938, 0.51417],
            [28, 14, 0.16335, 0.34158, 0.53321],
            [29, 14.5, 0.16918, 0.35378, 0.55225],
            [30, 15, 0.17502, 0.36598, 0.57130]
        ]
    },
    {
        "probe": "germanium",
        "thickness": 0.1,
        "data": [
            [1, 0.5, 3.4, 7.1, 11.1],
            [2, 1, 6.8, 14.3, 22.2],
            [3, 1.5, 10.2, 21.4, 33.4],
            [4, 2, 13.7, 28.6, 44.5],
            [5, 2.5, 17.1, 35.8, 55.6],
            [6, 3, 20.5, 42.9, 66.7],
            [7, 3.5, 23.9, 50.1, 77.8],
            [8, 4, 27.3, 57.2, 88.9],
            [9, 4.5, 30.7, 64.4, 100.1],
            [10, 5, 34.1, 71.5, 111.2],
            [11, 5.5, 37.5, 78.7, 122.3],
            [12, 6, 41.0, 85.8, 133.4],
            [13, 6.5, 44.4, 93.0, 144.5],
            [14, 7, 47.8, 100.1, 155.6],
            [15, 7.5, 51.2, 107.3, 166.8],
            [16, 8, 54.6, 114.4, 177.9],
            [17, 8.5, 58.0, 121.6, 189.0],
            [18, 9, 61.4, 128.7, 200.1],
            [19, 9.5, 64.8, 135.9, 211.2],
            [20, 10, 68.3, 143.0, 222.4],
            [21, 10.5, 71.7, 150.2, 233.5],
            [22, 11, 75.1, 157.3, 244.6],
            [23, 11.5, 78.5, 164.5, 255.7],
            [24, 12, 81.9, 171.6, 266.8],
            [25, 12.5, 85.3, 178.8, 277.9],
            [26, 13, 88.7, 185.9, 289.1],
            [27, 13.5, 92.1, 193.1, 300.2],
            [28, 14, 95.6, 200.2, 311.3],
            [29, 14.5, 99.0, 207.4, 322.4],
            [30, 15, 102.4, 214.5, 333.5]
        ]
    },
    {
        "probe": "sillicon",
        "thickness": 0.1,
        "data": [
            [1, 0.5, 0.00435, 0.00916, 0.01436],
            [2, 1, 0.00871, 0.01831, 0.02871],
            [3, 1.5, 0.01306, 0.02745, 0.04305],
            [4, 2, 0.01742, 0.03659, 0.05739],
            [5, 2.5, 0.02178, 0.04573, 0.07173],
            [6, 3, 0.02613, 0.05488, 0.08608],
            [7, 3.5, 0.03049, 0.06402, 0.10042],
            [8, 4, 0.03485, 0.07316, 0.11476],
            [9, 4.5, 0.03920, 0.08230, 0.12910],
            [10, 5, 0.04356, 0.09145, 0.14345],
            [11, 5.5, 0.04792, 0.10059, 0.15779],
            [12, 6, 0.05227, 0.10973, 0.17213],
            [13, 6.5, 0.05663, 0.11887, 0.18647],
            [14, 7, 0.06099, 0.12802, 0.20082],
            [15, 7.5, 0.06534, 0.13716, 0.21516],
            [16, 8, 0.06970, 0.14630, 0.22950],
            [17, 8.5, 0.07406, 0.15544, 0.24384],
            [18, 9, 0.07841, 0.16459, 0.25819],
            [19, 9.5, 0.08277, 0.17373, 0.27253],
            [20, 10, 0.08713, 0.18287, 0.28687],
            [21, 10.5, 0.09148, 0.19201, 0.30121],
            [22, 11, 0.09584, 0.20116, 0.31556],
            [23, 11.5, 0.10020, 0.21030, 0.32990],
            [24, 12, 0.10455, 0.21944, 0.34424],
            [25, 12.5, 0.10891, 0.22858, 0.35858],
            [26, 13, 0.11327, 0.23773, 0.37293],
            [27, 13.5, 0.11762, 0.24687, 0.38727],
            [28, 14, 0.12198, 0.25601, 0.40161],
            [29, 14.5, 0.12634, 0.26515, 0.41595],
            [30, 15, 0.13069, 0.27430, 0.43030]
        ]
    }
];
let first_obs_data = [
    ['1', '', ''],
    ['2', '', ''],
    ['3', '', ''],
    ['4', '', ''],
    ['5', '', ''],
    ['6', '', ''],
    ['7', '', ''],
    ['8', '', '']
];
let second_obs_data = [
    ['1', '', ''],
    ['2', '', ''],
    ['3', '', ''],
    ['4', '', ''],
    ['5', '', ''],
    ['6', '', ''],
    ['7', '', ''],
    ['8', '', '']
];
let third_obs_data = [
    ['1', '', ''],
    ['2', '', ''],
    ['3', '', ''],
    ['4', '', ''],
    ['5', '', ''],
    ['6', '', ''],
    ['7', '', ''],
    ['8', '', '']
];
//# sourceMappingURL=data.js.map