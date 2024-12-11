# 

Source: https://proofwiki.org/wiki/1-Seminorm_on_Continuous_on_Closed_Interval_Real-Valued_Functions_is_Norm



Theorem
Let $C \closedint a b$ be the space of real-valued functions continuous on $\closedint a b$.
Let $x \in C \closedint a b$ be a continuous real valued function.
Let $\ds \norm x_1 := \int_a^b \size {\map x t} \rd t$ be the 1-seminorm.

Then $\norm {\, \cdot \,}_1$ is a norm on $C \closedint a b$.


Proof
Positive definiteness
Let $x \in C \closedint a b$.
Then $\forall t \in \closedint 0 1 : \size {\map x t} \ge 0 $.
Hence:

$\ds \int_a^b \size {\map x t} \rd t = \norm x_1 \ge 0$.
Suppose $\forall t \in \closedint a b : \map x t = 0$.
Then $\norm x_1 = 0$.
Therefore:

$\paren {x = 0} \implies \paren {\norm x_1 = 0}$

Let $x \in C \closedint a b : \norm x_1 = 0$.
Suppose:

$\forall t \in \openint a b : \map x t = 0$.
By assumption of continuity of $x$:

$\forall t \in \closedint a b : \map x t = 0$.
Aiming for a contradiction, suppose:

$\exists t_0 \in \openint a b : \map x {t_0} \ne 0$.
By assumption, $x$ is continuous at $t_0$.

$\forall \epsilon \in \R_{> 0} : \exists \delta \in \R_{> 0} : \size {t - t_0} < \delta \implies \size {\map x t - \map x {t_0} } < \epsilon$
Furthermore:

$\exists \delta \in \R_{> 0} : \paren {a < t_0 - \delta} \land \paren {t_0 + \delta < b}$
Let $\ds \epsilon = \frac {\size {\map x {t_0} } } 2$.
We have that:














\(\ds \size {\map x t}\)

\(=\)







\(\ds \size {\map x t + \map x {t_0} - \map x {t_0} }\)




















\(\ds \)

\(\ge\)







\(\ds \size {\map x {t_0} } - \size {\map x t - \map x {t_0} }\)





Reverse triangle inequality














\(\ds \)

\(>\)







\(\ds \size {\map x {t_0} } - \frac {\size {\map x {t_0} } } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\size {\map x {t_0} } } 2\)




















\(\ds \)

\(>\)







\(\ds 0\)





$\map x {t_0} \ne 0$



Hence:














\(\ds 0\)

\(=\)







\(\ds \norm x_1\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \size {\map x t} \rd t\)




















\(\ds \)

\(\ge\)







\(\ds \int_{t_0 - \delta}^{t_0 + \delta} \size {\map x t} \rd t\)





$t_0 + \delta < b$, $a < t_0 - \delta$














\(\ds \)

\(\ge\)







\(\ds \int_{t_0 - \delta}^{t_0 + \delta} \frac {\size {\map x {t_0} } } 2 \rd t\)




















\(\ds \)

\(=\)







\(\ds 2 \delta \frac {\size {\map x {t_0} } } 2\)




















\(\ds \)

\(=\)







\(\ds \delta \size {\map x {t_0} }\)




















\(\ds \)

\(>\)







\(\ds 0\)









Hence, we reached a contradiction.
Therefore:

$\paren {\norm x_1 = 0} \implies \paren {x = 0}$


Positive homogeneity
Let $x \in C \closedint a b$, $\alpha \in \R$.
Then:














\(\ds \size {\alpha x}_1\)

\(=\)







\(\ds \int_a^b \size {\alpha \map x t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \size \alpha \int_a^b \size {\map x t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \size \alpha \norm x_1\)











Triangle inequality
Let $x, y \in C \closedint a b$














\(\ds \norm {x + y}_1\)

\(=\)







\(\ds \int_a^b \size {\map {\paren {x + y} } t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \size {\map x t + \map y t} \rd t\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(\le\)







\(\ds \int_a^b \paren {\size x + \size y} \rd t\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \int_a^b \size x \rd t + \int_a^b \size y \rd t\)




















\(\ds \)

\(=\)







\(\ds \norm x_1 + \norm y_1\)









$\blacksquare$


Also see
Definition:P-Seminorm


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed Spaces




