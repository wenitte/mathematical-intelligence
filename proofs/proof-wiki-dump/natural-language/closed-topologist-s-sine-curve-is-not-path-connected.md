# 

Source: https://proofwiki.org/wiki/Closed_Topologist%27s_Sine_Curve_is_not_Path-Connected



Theorem
Let $G$ be the graph of the function $y = \map \sin {\dfrac 1 x}$ for $x > 0$.
Let $J$ be the line segment joining the points $\tuple {0, -1}$ and $\tuple {0, 1}$ in $\R^2$.

Then while $G \cup J$ is connected, it is not path-connected.


Proof
From Closed Topologist's Sine Curve is Connected, $G \cup J$ is connected.

Let $I = \closedint 0 1 \subseteq \R$ be the closed real interval.
Let $A = \tuple {\dfrac 1 \pi, 0} \in \R^2$.
This proof is based on the fact that a continuous path $f: I \to G \cup J$ beginning at $A$ will never actually arrive at $0 = \tuple {0, 0} \in \R^2$ because $I$ is compact.
Suppose $f: I \to G \cup J$ is continuous and that $\map f 0 = A$.
Let $f_1: I \to \R$ and $f_2: I \to \R$ denote $\pr_1 \circ i \circ f$ and $\pr_2 \circ i \circ f$, where $i$ is the inclusion mapping and $\pr_1, \pr_2$ the first and second projections on the $x$ and $y$ axes.
Thus $f_2$ describes the vertical movement of the graph, and $f_1$ the horizontal movement.
Now $f_2$ is continuous and $I$ compact.
So by the Heine-Cantor Theorem, $f_2$ is uniformly continuous on $I$.
Let $\delta \in \R_{>0}$ be such that $\size {\map {f_2} t - \map {f_2} {t'} } < 2$ for any $t, t' \in I$ such that $\size {t - t'} < \delta$.
Let $0 < t_0 < t_1 < \ldots < t_n = 1$ be such that $t_i - t_{i - 1} < \delta$ for all $i = 1, 2, \ldots, n$.
Now: as $t$ goes from $t_0$ to $t_1$, $\map f t$ (which starts at $A$), can not reach a point $C$ where $y = 1$ without passing through a point $B$ where $y = -1$ on the way.
But then $\map f t = B$ and $\map f {t'} = C$ for some $t, t'$ where $\size {t - t'} < \delta$.
And since $B$ and $C$ are $2$ apart, $\size {\map {f_2} t - \map {f_2} {t'} } = 2$ which contradicts the choice of $\delta$.
Similarly, when going from $t_1$ to $t_2$, $t$ can similarly not get past more than one hump.
So, as $t$ goes from $0$ to $1$, $\map f t$ can not traverse more than $n$ humps.

We formalize this discussion by induction.
We will show that:

$\forall i \in \set {0, 1, \ldots, n}: \map {f_1} {t_i} > \dfrac 2 {\paren {2 i + 3} \pi}$
Since $\map f {t_0} = \map f 0 = \tuple {\dfrac 1 \pi, 0}$:

$\map {f_1} {t_0} = \dfrac 1 \pi > \dfrac 2 {3 \pi}$
Suppose:

$\exists i \in \set {0, 1, \ldots, n}: \map {f_1} {t_i} > \dfrac 2 {\paren {2 i + 3} \pi}$
Aiming for a contradiction, suppose also that $\map {f_1} {t_{i + 1} } \ge \dfrac 2 {\paren {2 i + 5} \pi}$.
Then since $f_1$ is continuous, by the I.V.P. there exists $t, t' \in \closedint {t_1} {t_{i + 1} }$ such that:

$\map {f_1} {t_i} = \dfrac 2 {\paren {2 i + 3} \pi}, \map {f_1} {t_{i + 1} } = \dfrac 2 {\paren {2 i + 5} \pi}$
But the only point in $G \cup J$ whose first coordinate is $\dfrac 2 {\paren {2 i + 3} \pi}$ is $\tuple {\dfrac 2 {\paren {2 i + 3} \pi}, \map \sin {\dfrac {\paren {2 i + 3} \pi} 2} }$.
So:

$\map {f_2} t = \map \sin {\dfrac {\paren {2 i + 3} \pi} 2}$
Similarly:

$\map {f_2} {t'} = \map \sin {\dfrac {\paren {2 i + 5} \pi} 2}$
Hence $\size {\map {f_2} t - \map {f_2} {t'} } = 2$ while $\size {t - t'} < \delta$.
This contradicts the choice of $\delta$.
This proves the induction.
The result follows from the fact that:

$\map {f_1} 1 > \dfrac 2 {\paren {2 n + 3} \pi} > 0$, so $\map {f_1} 1 \ne 0$
$\blacksquare$


Also see
Closed Topologist's Sine Curve is Connected


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.3$: Path-connectedness: Example $6.3.5$




