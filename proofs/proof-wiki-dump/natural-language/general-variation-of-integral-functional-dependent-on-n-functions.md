# 

Source: https://proofwiki.org/wiki/General_Variation_of_Integral_Functional/Dependent_on_N_Functions


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $J$ be a (real) functional of the form:
$\ds J \sqbrk {\ldots y_i \ldots} = \int_{x_0}^{x_1} \map F {x, \ldots y_i \ldots, \ldots y_i' \ldots} \rd x, i = \openint 1 n$
Then:
$\ds \delta J = \int_{x_0}^{x_1} \sum_{i \mathop = 1}^n \paren {F_{y_i} - \frac \d {\d x} F_{y_i'} } \map {h_i} x + \intlimits {\sum_{i \mathop = 1}^n F_{y_i'} \delta y_i} {x \mathop = x_0} {x \mathop = x_1} + \intlimits {\paren {F - \sum_{i \mathop = 1}^n y_i'F_{y_i'} } \delta x} {x \mathop = x_0} {x \mathop = x_1}$


Proof
Let $y = \map y x, y = \map {y^*} x$ be smooth real functions.
Let $\map h x = \map {y^*} x - \map y x$
Let the endpoints of the curve $y_i = \map {y_i} x, i = \openint 1 n$ be:

$P_0 = \tuple {x_0, \dotsc, y_i^0 \dotsc}$
$P_1 = \tuple {x_1, \dotsc, y_i^1 \dotsc}$
Let the endpoints of the curve $y_i = y_i^* = \map {y_i} x + \map {h_i} x, i = \openint 1 n$ be:

$P_0^* = \tuple {x_0 + \delta x_0, \dotsc, y_i^0 + \delta y_i^0 \dotsc}$
$P_1^* = \tuple {x_1 + \delta x_1, \dotsc, y_i^1 + \delta y_i^1 \dotsc}$
Note that the endpoints of both functions may not necessarily match, thus making the functions defined on different intervals.
We choose to extend both curves in such a way that:

if there is a difference between original endpoints of intervals at the same end, then the curve that is not defined in the given interval is extended linearly by drawing a straight line along the tangent of the curve at the point, closest to that interval.
Now both functions $\map {y_i} x$ and $\map {y^*_i} x$ are defined in $\closedint {x_0} {x_1 + \delta x_1}$.
The corresponding variation $\delta J$ of $J \sqbrk {\ldots y_i \ldots}$ is defined as the expression which is:

linear in $\delta x_0, \delta x_1$ and $h_i, h_i', y_i^0, y_i^1$ for $i = \openint 1 n$
and which:

differs from the increment by a quantity of order higher than 1 relative to $\ds \sum_{i \mathop = 1}^n \map \rho {y_i, y_i^*}$.
Here $\map \rho {y_i,y_i^*}$ is defined as:

$\map \rho {y_i, y_i^*} = \max \size {y_i - y_i^*} + \max \size {y_i' - {y_i^*}'} + \map {d_2} {P_0, P_0^*} + \map {d_2} {P_1, P_1^*}$
where $d_2$ is the Euclidean metric.














\(\ds \Delta J\)

\(=\)







\(\ds \int_{x_0 + \delta x_0}^{x_1 + \delta x_1} \map F {x, \ldots y_i + h_i \ldots, \ldots y_i' + h_i' \ldots} \rd x - \int_{x_0}^{x_1} \map F {x, \ldots y_i \ldots, \ldots y_i' \ldots} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{x_0}^{x_1} \sqbrk {\map F {x, \ldots y_i + h_i \ldots, \ldots y_i' + h_i' \ldots} - \map F {x, \ldots y_i \ldots, \ldots y_i' \ldots} } \rd x + \int_{x_1}^{x_1 + \delta x_1} \map F {x, \ldots y_i + h_i \ldots, \ldots y_i' + h_i' \ldots} \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int_{x_0}^{x_0 + \delta x_0} \map F {x, \ldots y_i + h_i \ldots, \ldots y_i' + h_i' \ldots} \rd x\)









By using Taylor's theorem, $\Delta J$ can be rewritten as:














\(\ds \Delta J\)

\(=\)







\(\ds \int_{x_0}^{x_1} \sum_{i \mathop = 1}^n \paren {F_{y_i} h_i + F_{y_i}' h_i'} \rd x + \bigvalueat F {x \mathop = x_1} \delta x_1 - \bigvalueat F {x \mathop = x_0} \delta x_0 + \OO \paren {\sum_{i \mathop = 1}^n \map {\rho} {y_i, y_i^*} }\)




















\(\ds \)

\(=\)







\(\ds \int_{x_0}^{x_1} \sum_{i \mathop = 1}^n \paren {F_{y_i} - \frac \d {\d x} F_{y_i'} } \map {h_i} x \rd x + \bigvalueat F {x \mathop = x_1} \delta x_1 + \valueat {\sum_{i \mathop = 1}^n F_{y_1'} h_i}  {x \mathop = x_1} - \bigvalueat F {x \mathop = x_0} \delta x_0 - \valueat {\sum_{i \mathop = 1}^n F_{y_i'} h_i} {x \mathop = x_0} + \map \OO {\sum_{i \mathop = 1}^n \map {\rho} {y_i, y_i^*} }\)









where $h_i$ terms were integrated by parts.
In the same manner, $\map h x$ can be expanded as:

$\ds \map {h_i} {x_0} = \delta y_1^0 - \map {y_i'} {x_0} \delta x_0 + \map \OO {\map \rho {y, y + h} }$
where $\map \OO {\map {\rho} {y, y + h} }$ is big-O notation.

$\map {h_i} {x_1} = \delta y_1^1 - \map {y_i'} {x_1} \delta x_1 + \map \OO {\map \rho {y, y + h} }$

This article, or a section of it, needs explaining.In particular: why $-\map {y_i'} {x_0} \delta x_0$ instead of $\sqbrk {\map { {y_i^*}'} {x_0} - \map {y_i'} {x_0} }\delta x_0$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:














\(\ds \delta J\)

\(=\)







\(\ds \int_{x_0}^{x_1} \sum_{i \mathop = 1}^n \paren {F_{y_i} - \frac \d {\d x} F_{y_i'} } \map {h_i} x \rd x + \sum_{i \mathop = 1}^n \bigvalueat {F_{y_i'} } {x \mathop = x_1} \delta y_i^1 + \valueat {\paren {F - \sum_{i \mathop = 1}^n y_i' F_{y_i'} } } {x \mathop = x_1} \delta x_1 - \valueat {\sum_{i \mathop = 1}^n F_{y_i'} } {x \mathop = x_0} \delta y_i^0 - \bigvalueat {\paren {F - \sum_{i \mathop = 1}^n y_i' F_{y_i'} } } {x \mathop = x_0} \delta x_0\)




















\(\ds \)

\(=\)







\(\ds \int_{x_0}^{x_1} \sum_{i \mathop = 1}^n \paren {F_{y_i} - \frac \d {\d x} F_{y_i'} } \map {h_i} x \rd x + \intlimits {\sum_{i \mathop = 1}^n F_{y_i'} \delta y_i} {x \mathop = x_0} {x \mathop = x_1} + \intlimits {\paren {F - \sum_{i \mathop = 1}^n y_i' F_{y_i'} } \delta x} {x \mathop = x_0} {x \mathop = x_1}\)









where:

$\bigvalueat {\delta x} {x \mathop = x_j} = \delta x_j$
$\bigvalueat {\delta y_i} {x \mathop = x_j} = \delta y_i^j, j \in \set {0, 1}$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 3.13$: Derivation of the Basic Formula




