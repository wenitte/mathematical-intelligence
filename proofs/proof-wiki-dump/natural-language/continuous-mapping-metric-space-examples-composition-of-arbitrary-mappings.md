# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_(Metric_Space)/Examples/Composition_of_Arbitrary_Mappings

Examples of Continuous Mappings in the Context of Metric Spaces
Let the following mappings be defined:










\(\ds g: \R^2 \to \R^2 \times \R^2: \, \)



\(\ds \map g {x, y}\)

\(=\)







\(\ds \tuple {\tuple {x, y}, \tuple {x, y} }\)
















\(\ds h: \R^2 \times \R^2 \to \R \times \R: \, \)



\(\ds \map h {\tuple {a, b}, \tuple {c, d} }\)

\(=\)







\(\ds \tuple {a + b, c - d}\)
















\(\ds k: \R \times \R \to \R \times \R: \, \)



\(\ds \map k {u, v}\)

\(=\)







\(\ds \tuple {u^2, v^2}\)
















\(\ds m: \R \times \R \to \R: \, \)



\(\ds \map k {x, y}\)

\(=\)







\(\ds \dfrac {x - y} 4\)









where $\R$ and $\R^2$ denote the real number line and real number plane respectively, under the usual (Euclidean) metric.

Then:

each of $g, h, k, m$ are continuous
$x y = \map {\paren {m \circ k \circ h \circ g} } {x, y}$
where $\circ$ denotes composition of mappings.


Proof
By Composition of Mappings is Associative and General Associativity Theorem, $m \circ j \circ h \circ g$ is well-defined and unambiguous.

Let $d : \R^2 \times \R^2 \to \R$ be defined as:

$\map d {\tuple {a, b}, \tuple {c, d} } = \max \set {\size {a - c}, \size {b - d} }$
and $d': \paren {\R^2 \times \R^2} \times \paren {\R^2 \times \R^2} \to \R$ be defined as:














\(\ds \map {d'} {\tuple {\tuple {a, b}, \tuple {c, d} }, \tuple {\tuple {k, l}, \tuple {m, n} } }\)

\(=\)







\(\ds \max \set {d {\tuple {a, b}, \tuple {k, l} }, d {\tuple {c, d}, \tuple {m, n} } }\)




















\(\ds \)

\(=\)







\(\ds \max \set {\size {a - k}, \size {b - l}, \size {c - m}, \size {d - n} }\)









Let $\epsilon \in \R_{>0}$.
Let $d$ be constrained by some $\delta \in \R_{>0}$ such that $\delta < \epsilon$:

$\map d {\tuple {x, y}, \tuple {a, b} } < \delta$
and so:

$\size {x - a} <\delta$ and $\size {y - b} < \delta$
Then:














\(\ds \map {d'} {\map g {x, y}, \map g {a, b} }\)

\(=\)







\(\ds \max \set {\map d {\tuple {x, y}, \tuple {a, b} }, \map d {\tuple {x, y}, \tuple {a, b} } }\)




















\(\ds \)

\(=\)







\(\ds \map d {\tuple {x, y}, \tuple {a, b} }\)




















\(\ds \)

\(<\)







\(\ds \delta\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









Hence:

$\map d {x, a} < \delta \implies \map {d'} {\map g x, \map g a} < \epsilon$
where $x, a \in \R^2$.
Hence $g$ is continuous.
$\Box$

We have that:

$h: \R^2 \times \R^2 \to \R \times \R: \map h {\tuple {a, b}, \tuple {c, d} } = \tuple {a + b, c - d}$
Let $d$ be defined as elements of $\R^2 \times \R^2$ as above.

Let $\epsilon \in \R_{>0}$.
Let $d$ be constrained by some $\delta \in \R_{>0}$ such that $\delta < \dfrac \epsilon 2$:

$\map d {\tuple {\tuple {a, b}, \tuple {c, d} }, \tuple {\tuple {k, l}, \tuple {m, n} } } = \max \set {\size {a - k}, \size {b - l}, \size {c - m}, \size {d - n} } < \delta$

Then:














\(\ds \)

\(\)







\(\ds \map {d'} {\map h {\tuple {a, b}, \tuple {c, d} }, \map h {\tuple {k, l}, \tuple {m, n} } }\)




















\(\ds \)

\(=\)







\(\ds \map {d'} {\tuple {a + b, c - d}, \tuple {k + l, m - n} }\)




















\(\ds \)

\(=\)







\(\ds \max \set {\size {\size {a - k} + \size {b - l} }, \size {\size {c - m} + \size {d - n} } }\)




















\(\ds \)

\(<\)







\(\ds 2 \delta\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









Hence:

$\map d {x, a} < \delta \implies \map {d'} {\map h x, \map h a} < \epsilon$
where $x, a \in \R^2 \times \R^2$.
Hence $h$ is continuous.
$\Box$

We have that:

$k: \R \times \R \to \R \times \R: \map k {u, v} = \tuple {u^2, v^2}$
Let $d$ be defined as:














\(\ds \map d {\tuple {u, v}, \tuple {a, b} }\)

\(=\)







\(\ds \max \set {\size {u - a}, \size {v - b} }\)














\(\ds \leadsto \ \ \)





\(\ds \map {d'} {\map k {u, v}, \map k {a, b} }\)

\(=\)







\(\ds \max \set {\size {u^2 - a^2}, \size {v^2 - b^2} }\)










Without loss of generality, let it be assumed that $\size {u - a} \ge \size {v - b}$.
Let $u > a$.
Then:

$\size {u - a} = u - a$
Setting $\map d {\tuple {u, v}, \tuple {a, b} } < \delta$ gives:

$u - a < \delta$
and so:

$u < a + \delta$
Hence:

$\size {u^2 - a^2} < \size {\delta^2 + 2 a \delta}$
Setting $\epsilon = \size {\delta^2 + 2 a \delta}$, it is noted that this can be made arbitrarily small for any given finite $a$.
Also:

$\size {v - b} < \delta$
and so:

$\size {v^2 - b^2} < \size {\delta^2 + 2 b \delta}$
As all the elements are even, $a > u$ gives similar results.
By the same argument, $\size {v - b} \ge \size {u - a}$ gives the same result.

So in all cases:

$\map d {\tuple {u, v}, \tuple {a, b} } < \delta \implies \map {d'} {\map k {u, v}, \map l {a, b} } < \epsilon$
for whatever $\epsilon$ is chosen.
Hence $k$ is continuous.
$\Box$

We have that:

$m: \R \times \R \to \R: \map k {x, y} = \dfrac {x - y} 4$

Let $d$ be defined as:














\(\ds \map d {\tuple {x, y}, \tuple {a, b} }\)

\(=\)







\(\ds \max \set {\size {x - a}, \size {y - b} }\)














\(\ds \leadsto \ \ \)





\(\ds \map {d'} {\map m {x, y}, \map m {a, b} }\)

\(=\)







\(\ds \size {\dfrac {x - y} 4 - \dfrac {a - b} 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 4 \size {x + b - y - a}\)




















\(\ds \)

\(<\)







\(\ds \size {x + b - y - a}\)




















\(\ds \)

\(\le\)







\(\ds \size {\size {x - a} + \size {y - b} }\)










Let $\epsilon \in \R_{>0}$.
Let $d$ be constrained by some $\delta \in \R_{>0}$ such that $\delta < \dfrac \epsilon 2$:















\(\ds \map d {\tuple {x, y}, \tuple {a, b} }\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \size {x - a}\)

\(<\)







\(\ds \delta \land \size {y - b} < \delta\)














\(\ds \leadsto \ \ \)





\(\ds \map {d'} {\map m {x, y}, \map m {a, b} }\)

\(<\)







\(\ds 2 \delta\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)










Hence:

$\map d {\tuple {x, y}, \tuple {a, b} } < \delta \implies \map {d'} {\map m {x, y}, \map m {a, b} } < \epsilon$
Hence $m$ is continuous.
$\Box$

Consider $\tuple {x, y} \in \R^2$.
We have:














\(\ds \map {\paren {m \circ k \circ h \circ g} } {x, y}\)

\(=\)







\(\ds \map {\paren {m \circ k \circ h} } {\map g {x, y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\paren {m \circ k \circ h} } {\tuple {x, y}, \tuple {x, y} }\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \map {\paren {m \circ k} } {\map h {\tuple {x, y}, \tuple {x, y} } }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\paren {m \circ k} } {x + y, x - y}\)





Definition of $h$














\(\ds \)

\(=\)







\(\ds \map m {\map k {x + y, x - y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map m {\paren {x + y}^2, \paren {x - y}^2}\)





Definition of $k$














\(\ds \)

\(=\)







\(\ds \map m {x^2 + 2 x y + y^2, x^2 - 2 x y + y^2}\)





expanding














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {x^2 + 2 x y + y^2} - \paren {x^2 - 2 x y + y^2} } 4\)





Definition of $m$














\(\ds \)

\(=\)







\(\ds x y\)





simplification



$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Exercise $4$




