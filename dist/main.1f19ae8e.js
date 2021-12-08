// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
'use strict';

function counter() {
  var seconds = 0;
  setInterval(function () {
    seconds += 1;
    document.getElementById('app').innerHTML = "<p>You have been here for ".concat(seconds, " seconds.</p>");
  }, 1000);
}

function countIncreases(arr, n) {
  var increasesNumber = [];
  var lenght;

  for (var i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1]) increasesNumber.push(arr[i]);
  }

  document.write(increasesNumber.length);
}

var arr = [148, 167, 168, 169, 182, 188, 193, 209, 195, 206, 214, 219, 225, 219, 211, 215, 216, 195, 200, 197, 226, 231, 234, 248, 249, 265, 262, 275, 271, 283, 297, 302, 306, 307, 309, 313, 306, 307, 310, 307, 306, 284, 291, 296, 297, 298, 302, 297, 295, 296, 297, 293, 294, 295, 303, 302, 304, 305, 303, 288, 289, 290, 291, 290, 288, 302, 304, 282, 283, 290, 301, 304, 301, 330, 337, 341, 340, 337, 341, 342, 343, 301, 311, 312, 302, 317, 318, 319, 345, 347, 354, 358, 356, 357, 362, 361, 357, 375, 376, 383, 384, 382, 383, 384, 391, 400, 410, 413, 419, 421, 424, 426, 425, 427, 429, 432, 433, 434, 440, 446, 444, 453, 461, 463, 461, 464, 463, 489, 486, 485, 486, 499, 498, 493, 494, 485, 490, 499, 498, 506, 510, 519, 524, 520, 521, 543, 550, 551, 553, 564, 567, 568, 572, 597, 579, 592, 597, 618, 620, 628, 651, 674, 671, 684, 719, 718, 730, 727, 729, 724, 720, 737, 740, 753, 763, 764, 762, 772, 774, 773, 771, 777, 774, 783, 791, 792, 791, 801, 822, 821, 814, 811, 812, 817, 835, 844, 837, 839, 841, 855, 872, 881, 895, 910, 900, 902, 913, 914, 911, 917, 918, 923, 933, 932, 931, 915, 912, 923, 939, 940, 941, 943, 947, 948, 931, 933, 944, 933, 947, 948, 949, 956, 949, 948, 969, 973, 989, 993, 994, 993, 1007, 1010, 1020, 1024, 1026, 1031, 1032, 1028, 1045, 1015, 1018, 1024, 998, 1000, 1006, 994, 995, 993, 1010, 1011, 1010, 1015, 1021, 1039, 1045, 1041, 1049, 1044, 1050, 1063, 1066, 1051, 1056, 1059, 1060, 1059, 1064, 1067, 1066, 1067, 1069, 1072, 1074, 1077, 1078, 1080, 1086, 1079, 1089, 1093, 1099, 1102, 1103, 1108, 1119, 1138, 1139, 1144, 1148, 1151, 1152, 1151, 1155, 1154, 1153, 1157, 1159, 1164, 1168, 1172, 1171, 1182, 1189, 1190, 1192, 1194, 1196, 1197, 1222, 1216, 1220, 1206, 1205, 1196, 1200, 1210, 1203, 1200, 1212, 1218, 1219, 1205, 1211, 1212, 1213, 1176, 1187, 1174, 1175, 1180, 1181, 1187, 1185, 1211, 1212, 1199, 1231, 1234, 1249, 1250, 1247, 1235, 1234, 1236, 1237, 1266, 1265, 1286, 1289, 1282, 1283, 1273, 1282, 1267, 1271, 1278, 1291, 1307, 1294, 1292, 1320, 1323, 1314, 1317, 1342, 1344, 1319, 1326, 1330, 1329, 1331, 1335, 1338, 1360, 1364, 1381, 1389, 1386, 1387, 1388, 1389, 1391, 1395, 1398, 1404, 1405, 1408, 1412, 1427, 1410, 1425, 1409, 1410, 1412, 1411, 1394, 1406, 1407, 1404, 1413, 1418, 1417, 1442, 1443, 1444, 1445, 1458, 1452, 1453, 1466, 1465, 1466, 1465, 1476, 1484, 1487, 1490, 1494, 1495, 1502, 1498, 1501, 1496, 1498, 1492, 1501, 1499, 1477, 1480, 1483, 1484, 1483, 1488, 1494, 1491, 1489, 1503, 1535, 1544, 1547, 1549, 1550, 1557, 1542, 1540, 1542, 1543, 1544, 1542, 1541, 1546, 1542, 1540, 1526, 1534, 1536, 1549, 1542, 1552, 1553, 1554, 1569, 1568, 1569, 1563, 1560, 1572, 1568, 1544, 1552, 1559, 1563, 1556, 1577, 1594, 1596, 1581, 1580, 1570, 1552, 1560, 1561, 1558, 1559, 1560, 1561, 1560, 1554, 1562, 1565, 1561, 1570, 1571, 1572, 1568, 1565, 1574, 1616, 1607, 1604, 1606, 1609, 1607, 1608, 1609, 1618, 1621, 1622, 1623, 1628, 1637, 1648, 1656, 1653, 1649, 1651, 1654, 1693, 1697, 1705, 1706, 1705, 1712, 1709, 1708, 1715, 1717, 1721, 1723, 1730, 1729, 1740, 1732, 1733, 1740, 1746, 1747, 1744, 1748, 1746, 1745, 1747, 1749, 1750, 1744, 1747, 1749, 1751, 1749, 1751, 1782, 1783, 1767, 1769, 1799, 1777, 1783, 1784, 1786, 1790, 1791, 1802, 1804, 1807, 1824, 1825, 1840, 1852, 1872, 1874, 1871, 1866, 1861, 1860, 1861, 1842, 1840, 1841, 1842, 1841, 1832, 1848, 1851, 1834, 1846, 1844, 1826, 1829, 1840, 1841, 1844, 1848, 1820, 1831, 1833, 1822, 1814, 1819, 1833, 1832, 1824, 1814, 1815, 1818, 1829, 1832, 1833, 1847, 1846, 1848, 1850, 1880, 1889, 1887, 1888, 1881, 1880, 1883, 1885, 1882, 1881, 1868, 1870, 1855, 1862, 1863, 1870, 1866, 1875, 1894, 1896, 1880, 1898, 1917, 1918, 1914, 1919, 1907, 1905, 1893, 1901, 1899, 1909, 1910, 1918, 1921, 1930, 1929, 1935, 1917, 1919, 1917, 1907, 1911, 1910, 1911, 1930, 1958, 1964, 1971, 1972, 1950, 1963, 1967, 1968, 1965, 1973, 1975, 1965, 1963, 1949, 1950, 1953, 1952, 1957, 1974, 1992, 2022, 2021, 2022, 2025, 2024, 2032, 2048, 2074, 2068, 2072, 2068, 2085, 2091, 2111, 2095, 2091, 2089, 2103, 2107, 2117, 2123, 2128, 2136, 2134, 2140, 2141, 2140, 2141, 2122, 2125, 2129, 2142, 2106, 2101, 2104, 2122, 2131, 2156, 2178, 2187, 2182, 2180, 2177, 2178, 2179, 2197, 2198, 2197, 2198, 2202, 2204, 2210, 2211, 2212, 2207, 2206, 2211, 2216, 2209, 2210, 2202, 2207, 2206, 2207, 2210, 2213, 2185, 2187, 2188, 2203, 2206, 2213, 2233, 2238, 2249, 2250, 2252, 2253, 2240, 2246, 2248, 2235, 2237, 2255, 2257, 2235, 2245, 2240, 2246, 2237, 2255, 2282, 2283, 2291, 2304, 2305, 2306, 2309, 2319, 2321, 2323, 2318, 2317, 2316, 2317, 2323, 2314, 2326, 2313, 2314, 2316, 2317, 2320, 2317, 2326, 2322, 2348, 2349, 2335, 2331, 2338, 2343, 2344, 2345, 2335, 2332, 2339, 2340, 2335, 2346, 2347, 2343, 2342, 2344, 2333, 2326, 2351, 2355, 2363, 2366, 2364, 2393, 2410, 2411, 2433, 2440, 2413, 2407, 2403, 2404, 2407, 2427, 2425, 2430, 2446, 2449, 2450, 2448, 2453, 2454, 2456, 2455, 2456, 2455, 2460, 2451, 2464, 2463, 2468, 2471, 2472, 2456, 2467, 2471, 2481, 2505, 2524, 2534, 2533, 2531, 2526, 2527, 2522, 2534, 2535, 2538, 2537, 2538, 2541, 2542, 2544, 2543, 2529, 2519, 2508, 2522, 2526, 2554, 2560, 2554, 2558, 2562, 2576, 2580, 2581, 2589, 2573, 2596, 2600, 2601, 2606, 2607, 2611, 2606, 2624, 2631, 2634, 2663, 2661, 2663, 2676, 2680, 2678, 2680, 2677, 2672, 2685, 2716, 2713, 2690, 2698, 2699, 2716, 2720, 2719, 2720, 2724, 2722, 2724, 2725, 2727, 2733, 2736, 2739, 2740, 2753, 2762, 2763, 2793, 2808, 2787, 2778, 2782, 2771, 2783, 2795, 2803, 2808, 2832, 2833, 2842, 2843, 2839, 2840, 2807, 2808, 2806, 2825, 2836, 2838, 2842, 2848, 2817, 2818, 2821, 2820, 2844, 2859, 2830, 2824, 2825, 2850, 2853, 2852, 2830, 2835, 2839, 2828, 2827, 2828, 2826, 2827, 2815, 2816, 2819, 2818, 2792, 2789, 2793, 2801, 2778, 2779, 2780, 2783, 2808, 2824, 2792, 2811, 2810, 2777, 2774, 2773, 2782, 2781, 2790, 2785, 2789, 2785, 2786, 2785, 2782, 2783, 2785, 2788, 2785, 2790, 2816, 2834, 2835, 2836, 2842, 2846, 2839, 2861, 2863, 2868, 2867, 2864, 2849, 2850, 2851, 2852, 2826, 2815, 2814, 2820, 2821, 2837, 2865, 2866, 2851, 2856, 2861, 2867, 2874, 2871, 2872, 2861, 2842, 2843, 2840, 2872, 2879, 2873, 2881, 2877, 2880, 2873, 2872, 2902, 2906, 2900, 2899, 2911, 2914, 2924, 2925, 2920, 2909, 2901, 2924, 2936, 2938, 2947, 2950, 2962, 2963, 2955, 2953, 2970, 2967, 2947, 2958, 2961, 2962, 2952, 2953, 2951, 2947, 2945, 2952, 2956, 2959, 2961, 2960, 2965, 2966, 2962, 2964, 2972, 2975, 2985, 2982, 2996, 2997, 2991, 2994, 2995, 2994, 2978, 2987, 2994, 3003, 2994, 2993, 2998, 3000, 3004, 3005, 3006, 3024, 3046, 3049, 3053, 3052, 3064, 3067, 3065, 3067, 3068, 3063, 3065, 3067, 3063, 3066, 3068, 3079, 3085, 3086, 3088, 3090, 3093, 3119, 3144, 3143, 3144, 3146, 3159, 3160, 3162, 3164, 3160, 3158, 3143, 3138, 3135, 3140, 3145, 3137, 3134, 3140, 3141, 3135, 3134, 3133, 3123, 3124, 3123, 3124, 3126, 3125, 3109, 3105, 3106, 3120, 3100, 3112, 3114, 3122, 3121, 3120, 3131, 3140, 3141, 3152, 3153, 3154, 3155, 3162, 3160, 3161, 3177, 3190, 3191, 3192, 3194, 3196, 3190, 3187, 3199, 3193, 3200, 3199, 3214, 3212, 3175, 3150, 3153, 3177, 3181, 3165, 3183, 3185, 3187, 3188, 3187, 3201, 3203, 3202, 3200, 3209, 3218, 3217, 3216, 3208, 3204, 3203, 3179, 3185, 3188, 3195, 3196, 3193, 3194, 3211, 3216, 3208, 3210, 3211, 3212, 3204, 3205, 3209, 3232, 3234, 3255, 3254, 3264, 3267, 3269, 3274, 3278, 3290, 3301, 3303, 3305, 3306, 3304, 3305, 3302, 3307, 3308, 3297, 3302, 3307, 3306, 3307, 3306, 3274, 3275, 3276, 3278, 3281, 3280, 3274, 3299, 3298, 3276, 3275, 3278, 3281, 3284, 3285, 3281, 3282, 3244, 3239, 3240, 3217, 3236, 3238, 3240, 3245, 3248, 3255, 3256, 3260, 3261, 3271, 3289, 3302, 3303, 3304, 3305, 3304, 3306, 3307, 3334, 3338, 3341, 3340, 3360, 3354, 3353, 3366, 3369, 3374, 3377, 3368, 3361, 3378, 3385, 3384, 3382, 3386, 3384, 3388, 3381, 3358, 3359, 3363, 3364, 3365, 3366, 3368, 3392, 3419, 3436, 3438, 3452, 3479, 3480, 3483, 3494, 3500, 3511, 3524, 3535, 3560, 3571, 3584, 3600, 3598, 3591, 3593, 3598, 3599, 3598, 3599, 3610, 3608, 3610, 3611, 3615, 3616, 3620, 3606, 3622, 3625, 3629, 3636, 3635, 3640, 3635, 3636, 3634, 3635, 3652, 3654, 3655, 3657, 3642, 3647, 3654, 3661, 3621, 3620, 3621, 3628, 3604, 3597, 3598, 3587, 3588, 3591, 3595, 3594, 3596, 3597, 3598, 3603, 3604, 3605, 3632, 3627, 3630, 3631, 3632, 3642, 3643, 3644, 3649, 3653, 3652, 3653, 3654, 3653, 3669, 3688, 3696, 3697, 3704, 3707, 3710, 3704, 3718, 3721, 3725, 3751, 3757, 3760, 3776, 3775, 3782, 3778, 3792, 3804, 3818, 3819, 3806, 3810, 3795, 3806, 3821, 3823, 3858, 3860, 3858, 3865, 3868, 3875, 3876, 3878, 3888, 3891, 3893, 3884, 3889, 3897, 3891, 3894, 3896, 3924, 3925, 3926, 3927, 3934, 3938, 3966, 3972, 3973, 3977, 3976, 4003, 4017, 4023, 4019, 4017, 3988, 3997, 4010, 4017, 4018, 3994, 3995, 3985, 3987, 3997, 4004, 4003, 4005, 4009, 4007, 4021, 4023, 3998, 3991, 4021, 4020, 4027, 4026, 4030, 4043, 4047, 4048, 4046, 4045, 4046, 4059, 4050, 4064, 4065, 4077, 4083, 4087, 4079, 4087, 4082, 4083, 4111, 4112, 4122, 4123, 4126, 4129, 4138, 4139, 4172, 4160, 4135, 4136, 4147, 4182, 4181, 4180, 4184, 4188, 4191, 4194, 4195, 4176, 4185, 4180, 4187, 4188, 4189, 4190, 4211, 4205, 4208, 4220, 4236, 4239, 4240, 4243, 4240, 4269, 4275, 4274, 4272, 4282, 4281, 4286, 4285, 4248, 4247, 4250, 4249, 4244, 4272, 4265, 4269, 4295, 4280, 4279, 4273, 4256, 4245, 4247, 4248, 4228, 4229, 4231, 4245, 4259, 4261, 4268, 4270, 4272, 4276, 4305, 4322, 4325, 4333, 4329, 4330, 4331, 4328, 4332, 4340, 4367, 4363, 4375, 4399, 4408, 4434, 4412, 4420, 4421, 4422, 4433, 4416, 4430, 4434, 4437, 4438, 4445, 4446, 4448, 4450, 4465, 4468, 4482, 4484, 4461, 4462, 4461, 4462, 4464, 4461, 4464, 4465, 4470, 4478, 4480, 4461, 4471, 4464, 4462, 4463, 4464, 4465, 4454, 4457, 4455, 4456, 4467, 4480, 4490, 4491, 4499, 4500, 4517, 4524, 4540, 4551, 4552, 4559, 4560, 4559, 4565, 4558, 4557, 4562, 4568, 4573, 4578, 4557, 4573, 4574, 4572, 4588, 4613, 4614, 4600, 4602, 4601, 4598, 4597, 4601, 4611, 4612, 4613, 4621, 4622, 4645, 4651, 4650, 4663, 4660, 4657, 4660, 4667, 4666, 4669, 4666, 4654, 4657, 4669, 4672, 4651, 4652, 4655, 4653, 4654, 4669, 4670, 4671, 4672, 4673, 4675, 4681, 4682, 4687, 4691, 4692, 4688, 4687, 4713, 4725, 4719, 4720, 4730, 4728, 4725, 4720, 4721, 4722, 4714, 4716, 4724, 4707, 4716, 4707, 4706, 4707, 4708, 4709, 4710, 4711, 4726, 4694, 4701, 4697, 4698, 4678, 4679, 4680, 4670, 4661, 4677, 4678, 4660, 4649, 4650, 4653, 4655, 4650, 4657, 4658, 4660, 4663, 4686, 4691, 4686, 4676, 4658, 4656, 4655, 4657, 4656, 4655, 4670, 4661, 4658, 4659, 4663, 4664, 4673, 4691, 4694, 4696, 4698, 4702, 4706, 4714, 4709, 4707, 4708, 4719, 4725, 4744, 4754, 4782, 4778, 4808, 4826, 4830, 4838, 4841, 4848, 4855, 4866, 4862, 4865, 4852, 4881, 4873, 4875, 4874, 4876, 4869, 4866, 4870, 4867, 4866, 4883, 4912, 4918, 4938, 4960, 4948, 4956, 4961, 4978, 4993, 4994, 4998, 5000, 5001, 5007, 5009, 5015, 5002, 5005, 5039, 5037, 5043, 5044, 5051, 5053, 5057, 5058, 5059, 5058, 5065, 5067, 5066, 5069, 5070, 5077, 5076, 5077, 5078, 5079, 5085, 5081, 5087, 5107, 5122, 5123, 5099, 5066, 5083, 5109, 5105, 5106, 5090, 5112, 5102, 5109, 5108, 5109, 5108, 5109, 5118, 5114, 5117, 5119, 5139, 5144, 5142, 5148, 5151, 5147, 5148, 5160, 5172, 5154, 5156, 5155, 5164, 5155, 5143, 5122, 5147, 5162, 5163, 5151, 5152, 5157, 5163, 5203, 5211, 5222, 5224, 5241, 5239, 5250, 5254, 5250, 5251, 5252, 5256, 5276, 5274, 5246, 5248, 5251, 5250, 5254, 5267, 5285, 5286, 5292, 5290, 5289, 5293, 5294, 5299, 5303, 5305, 5306, 5316, 5317, 5319, 5320, 5326, 5325, 5330, 5329, 5332, 5336, 5338, 5339, 5349, 5353, 5354, 5346, 5348, 5349, 5358, 5359, 5360, 5361, 5377, 5380, 5390, 5391, 5403, 5402, 5405, 5404, 5406, 5405, 5406, 5405, 5406, 5434, 5443, 5444, 5458, 5478, 5484, 5491, 5492, 5504, 5507, 5508, 5514, 5512, 5523, 5529, 5534, 5535, 5558, 5560, 5561, 5534, 5543, 5538, 5537, 5533, 5554, 5558, 5557, 5554, 5590, 5601, 5604, 5623, 5626, 5625];
var n = arr.length;
counter();
countIncreases(arr, n);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59745" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map