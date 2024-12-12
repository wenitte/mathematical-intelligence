# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Injection/Definition_1_iff_Definition_3



Theorem
The following definitions of the concept of Injection are equivalent:

Definition 1
A mapping $f$ is an injection, or injective if and only if:

$\forall x_1, x_2 \in \Dom f: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$

That is, an injection is a mapping such that the output uniquely determines its input.

Definition 3
Let $f$ be a mapping.
Then $f$ is an injection if and only if:

$f^{-1} {\restriction_{\Img f} }: \Img f \to \Dom f$ is a mapping
where $f^{-1} {\restriction_{\Img f} }$ is the restriction of the inverse of $f$ to the image set of $f$.


Proof
Let $f: S \to T$ be an injection by definition 1.
Thus:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
First we note that: 

$t \in \Img f \implies \exists x \in \Dom f: \map f x = t$
thus fulfilling the condition for $f^{-1} {\restriction_{\Img f} }$ to be left-total.

Now let:

$t \in \Img f: \tuple {t, y}, \tuple {t, z} \in f^{-1}$
Thus:














\(\ds \tuple {t, y}, \tuple {t, z}\)

\(\in\)







\(\ds f^{-1} {\restriction_{\Img f} }\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {y, t}, \tuple {z, t}\)

\(\in\)







\(\ds f\)





Definition of Inverse of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map f y = t\)

\(=\)







\(\ds \map f z\)





Equality of Elements in Range of Mapping








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds z\)





as $f$ is injective




So by the definition of mapping, $f^{-1} {\restriction_{\Img f} }$ is a mapping.
So $f$ is an injection by definition 3.
$\Box$

Let $f: S \to T$ be an injection by definition 3.
Then:

$f^{-1} {\restriction_{\Img f} }: \Img f \to \Dom f$ is a mapping
where $f^{-1} {\restriction_{\Img f} }$ is the restriction of the inverse of $f$ to the image set of $f$.

We need to show that:

$\forall x, z \in \Dom f: \map f x = \map f z \implies x = z$
So, pick any $x, z \in \Dom f$ such that:

$\map f x = \map f z$
Then:














\(\ds \map f x\)

\(=\)







\(\ds \map f z\)














\(\ds \leadsto \ \ \)

\(\ds \exists y \in \Dom f: \, \)



\(\ds \tuple {x, y}, \tuple {z, y}\)

\(\in\)







\(\ds f\)





Definition of Mapping








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}, \tuple {y, z}\)

\(\in\)







\(\ds f^{-1} {\restriction_{\Img f} }\)





Definition of Inverse of Mapping








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds z\)





as it is specified that $f^{-1} {\restriction_{\Img f} }$ is a mapping




So $f$ is an injection by definition 1.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.2$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): Notation and Terminology




