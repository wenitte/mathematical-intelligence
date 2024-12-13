# 

Source: https://proofwiki.org/wiki/Paths_Crossing_Rectangle_Necessarily_Meet

Theorem
Let $R = \closedint a b \times \closedint c d$ be a closed rectangle.
Let $p, q : \closedint {-1} 1 \to R$ be paths in $R$.
Suppose:

$\map {p_1} {-1} = a$
$\map {p_1} 1 = b$
$\map {q_2} {-1} = c$
$\map {q_2} 1 = d$
where:

$\map p t = \tuple {\map {p_1} t, \map {p_2} t}$
$\map q t = \tuple {\map {q_1} t, \map {q_2} t}$
Intuitively, that is to say:

The path $p$ begins on the left edge of $R$, and ends on the right edge.
The path $q$ begins on the bottom edge of $R$, and ends on the top edge.

Then, there exist $t_p, t_q \in \closedint {-1} 1$ such that:

$\map p {t_p} = \map q {t_q}$
which is to say, the two paths meet at some point in $R$.


Proof
Aiming for a contradiction, suppose, suppose there are no such $t_p, t_q$.
Define $N : \closedint {-1} 1^2 \to \R_{\ge 0}$ as:

$\map N {s, t} = \map \max {\size {\map {p_1} s - \map {q_1} t}, \size {\map {p_2} s - \map {q_2} t}}$
By our assumption:

$\map p s \ne \map q t$
for all $s, t \in \closedint {-1} 1$.
Therefore, for each $s, t$, at least one of $\map {p_1} s \ne \map {q_1} t$ or $\map {p_2} s \ne \map {q_2} t$ holds.
Thus, $\map N {s, t} > 0$ for all $s, t \in \closedint {-1} 1$.
Additionally, by Combination Theorem for Continuous Mappings on Metric Space:

$N$ is continuous on $\closedint {-1} 1^2$

Now, we define $F : \closedint {-1} 1^2 \to \closedint {-1} 1^2$ as:

$\map F {s, t} = \tuple {\dfrac {\map {q_1} t - \map {p_1} s} {\map N {s, t}}, \dfrac {\map {p_2} s - \map {q_2} t} {\map N {s, t}}}$
First, we must show that $F$ is well-defined.
Since:

$\map N {s, t} \ge \size {\map {q_1} t - \map {p_1} s}$
$\map N {s, t} \ge \size {\map {p_2} s - \map {q_2} t}$
it follows that the image of $F$ is indeed contained in $\closedint {-1} 1^2$.

Next, we want to prove that:

$\Img F \subseteq \closedint {-1} 1 \times \set {-1, 1} \cup \set {-1, 1} \times \closedint {-1} 1$
or in other words, for all $s, t \in \closedint {-1} 1$:

$1 \in \set {\size {\map {F_1} {s, t}}, \size {\map {F_2} {s, t}}}$
Observe that, by definition of $N$:

$\map N {s, t} = \size {\map {p_i} s - \map {q_i} t}$
for at least one of $i \in \set {1, 2}$.
Then:














\(\ds \size {\map {F_i} {s, t} }\)

\(=\)







\(\ds \size {\frac {\map {p_i} s - \map {q_i} t} {\map N {s, t} } }\)





Definition of $F$














\(\ds \)

\(=\)







\(\ds \frac 1 {\map N {s, t} } \size {\map {p_i} s - \map {q_i} t}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(=\)







\(\ds \frac 1 {\size {\map {p_i} s - \map {q_i} t} } \size {\map {p_i} s - \map {q_i} t}\)





Above














\(\ds \)

\(=\)







\(\ds 1\)










By:

Brouwer's Fixed Point Theorem
Compact Convex Sets with Nonempty Interior are Homeomorphic
Fixed-Point Property is Topological
it follows that $F$ must have a fixed point $\tuple {s_0, t_0}$.
That is:

$\map F {s_0, t_0} = \tuple {s_0, t_0}$
By the above argument, at least one of the following holds:

$s_0 = -1$
$s_0 = 1$
$t_0 = -1$
$t_0 = 1$

Suppose, for instance, $s_0 = -1$.
Then, by hypothesis, $\map {p_1} {s_0} = a$.
Since $\map {q_1} {t_0} \in \closedint a b$, it follows that:

$\map {q_1} {t_0} \ge \map {p_1} {s_0}$
Therefore:














\(\ds \map {F_1} {s_0, t_0}\)

\(=\)







\(\ds \dfrac {\map {q_1} {t_0} - \map {p_1} {s_0} } {\map N {s_0, t_0} }\)





Definition of $F$














\(\ds \)

\(\ge\)







\(\ds 0\)





$\map {q_1} {t_0} \ge \map {p_1} {s_0}$














\(\ds \)

\(>\)







\(\ds -1\)




















\(\ds \)

\(=\)







\(\ds s_0\)









which contradicts our supposition that $\map F {s_0, t_0} = \tuple {s_0, t_0}$
In the same manner, we can show:

$s_0 = 1 \implies \map {F_1} {s_0, t_0} \le 0$
$t_0 = -1 \implies \map {F_2} {s_0, t_0} \ge 0$
$t_0 = 1 \implies \map {F_2} {s_0, t_0} \le 0$
all of which are clearly contradictory.
Since every case leads to a contradiction, we conclude that there must exist $t_p, t_q$ such that:

$\map p {t_p} = \map q {t_q}$
$\blacksquare$


Sources
1984: Ryuji Maehara: The Jordan Curve Theorem via the Brouwer Fixed Point Theorem (Amer. Math. Monthly Vol. 91, no. 10: pp. 641 – 643)  www.jstor.org/stable/2323369




