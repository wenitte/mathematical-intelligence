# 

Source: https://proofwiki.org/wiki/Cardinal_Product_Equinumerous_to_Ordinal_Product

Theorem
Let $S$ and $T$ be sets that are equivalent to their cardinal numbers.
Let $\card S$ denote the cardinal number of $S$.
Let $\cdot$ denote ordinal multiplication and let $\times$ denote the Cartesian product.

Then:

$S \times T \sim \card S \cdot \card T$


Proof
Let $f: S \to \card S$ and $g: T \to \card T$ be bijections.
Let $\cdot$ denote ordinal multiplication, while $\times$ shall denote the Cartesian product.

Define the function $F$ to be:

$\forall x \in S, y \in T: \map F {x, y} = \card S \cdot \map g y + \map f x$

Suppose $\map F {x_1, y_1} = \map F {x_2, y_2}$.














\(\ds \card S \cdot \map g {y_1} + \map f {x_1}\)

\(=\)







\(\ds \card S \cdot \map g {y_2} + \map f {x_2}\)














\(\ds \leadsto \ \ \)





\(\ds \map f {x_1}, \map f {x_2}\)

\(\in\)







\(\ds \card S\)





Definition of Mapping $f$








\(\ds \leadsto \ \ \)





\(\ds \map f {x_1}\)

\(=\)







\(\ds \map f {x_2}\)





Division Theorem for Ordinals












\(\, \ds \land \, \)

\(\ds \map g {y_1}\)

\(=\)







\(\ds \map g {y_2}\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_2\)





Definition of Bijection












\(\, \ds \land \, \)

\(\ds y_1\)

\(=\)







\(\ds y_2\)









It follows that $F: S \times T \to \card S \cdot \card T$ is a injection.
$\Box$

Furthermore, take any $z \in \card S \cdot \card T$.
By Division Theorem for Ordinals, it follows that:

$z = \card S \cdot a + b$ for some unique $a$ and $b \in \card S$.
Moreover, $a \in \card T$ since otherwise, this would contradict the fact that $z \in \card S \cdot \card T$.
Therefore, $a = \map f x$ for some $x \in S$ and $b = \map g y$ for some $y \in T$.
Thus, $F : S \times T \to \card S \cdot \card T$ is a surjection.
$\Box$

Therefore, $F : S \times T \to \card S \cdot \card T$ is a bijection.
By Condition for Set Equivalent to Cardinal Number, it follows that:

$S \times T \sim \card S \cdot \card T$
$\blacksquare$





