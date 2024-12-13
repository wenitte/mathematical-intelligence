# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Operations_are_Continuous/Inversion

Theorem
Let $\struct {R, +, *, \norm {\,\cdot\,} }$ be a normed division ring.
Let $d$ be the metric induced by the norm $\norm {\,\cdot\,}$.
Let $R^* = R \setminus \set 0$
Let $d^*$ be the subspace metric on $R^*$.

Then the mapping:

$\iota : \struct {R^* ,d^*} \to \struct {R, d} : \map \iota x = x^{-1}$
is continuous.


Proof
Let $x_0 \in R^*$.
Let $\epsilon > 0$ be given.

Let $\delta = \min \set {\dfrac {\norm {x_0} } 2, \dfrac {\norm {x_0}^2 \epsilon} 2 }$
Let $x \in R^*$ such that:

$\map {d^*} {x, x_0} < \delta$
By the definition of the subspace metric on $R^*$ and the definition of the metric induced by the norm on $R$:

$\map {d^*} {x, x_0} = \map d {x, x_0} = \norm {x - x_0} < \delta$
Then:














\(\ds \norm {x_0}\)

\(\le\)







\(\ds \norm {x - x_0} + \norm x\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(<\)







\(\ds \delta + \norm x\)





by hypothesis: $\norm {x - x_0} < \delta$














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(\le\)







\(\ds \dfrac {\norm {x_0} } 2 + \norm x\)





by hypothesis: $\delta \le \dfrac {\norm {x_0} } 2$














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\norm {x_0} } 2\)

\(<\)







\(\ds \norm x\)





subtracting $\dfrac {\norm {x_0} } 2$ from both sides














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 2 {\norm {x_0} }\)

\(>\)







\(\ds \dfrac 1 {\norm x}\)





inverting both sides of the equation




Hence:














\(\ds \map d {x^{-1}, x_0^{-1} }\)

\(=\)







\(\ds \norm {x^{-1} - x_0^{-1} }\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm x} \paren {\norm x \norm {x^{-1} - x_0^{-1} } \norm {x_0} } \dfrac 1 {\norm {x_0} }\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm x \norm {x_0} } \paren {\norm {x \paren {x^{-1} - x_0^{-1} } x_0} }\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm x \norm {x_0} } \paren {\norm {x x^{-1} x_0 - x x_0^{-1} x_0} }\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm x \norm {x_0} } \paren {\norm {x_0 - x} }\)





Definition of Division Ring














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(<\)







\(\ds \dfrac 2 {\norm {x_0}^2} \paren {\norm {x_0 - x} }\)





from $\dfrac 1 {\norm x} < \dfrac 2 {\norm {x_0} }$ above














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(<\)







\(\ds \dfrac {2 \delta} {\norm {x_0}^2}\)





by hypothesis: $\norm {x - x_0} < \delta$














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(\le\)







\(\ds \dfrac 2 {\norm {x_0}^2} \paren {\dfrac {\norm {x_0}^2 \epsilon} 2}\)





by hypothesis: $\delta \le \dfrac {\norm {x_0}^2 \epsilon} 2$














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \epsilon\)





cancelling terms




Since $x_0$ and $\epsilon$ were arbitrary, by the definition of continuity then the mapping:

$\iota: \struct {R^*, d^*} \to \struct {R, d} : \map \iota x = x^{-1}$
is continuous.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.3$: Topology, Problem $43$




