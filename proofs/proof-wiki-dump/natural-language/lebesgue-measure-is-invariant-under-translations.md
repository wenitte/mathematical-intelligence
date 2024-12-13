# 

Source: https://proofwiki.org/wiki/Lebesgue_Measure_is_Invariant_under_Translations



Theorem
Let $\lambda^n$ be the $n$-dimensional Lebesgue measure on $\R^n$ equipped with the Borel $\sigma$-algebra $\map \BB {\R^n}$.
Let $\mathbf x \in \R^n$.

Then $\lambda^n$ is translation invariant; that is, for all $B \in \map \BB {\R^n}$, have:

$\map {\lambda^n} {\mathbf x + B} = \map {\lambda^n} B$
where $\mathbf x + B$ is the set $\set {\mathbf x + \mathbf b: \mathbf b \in B}$.


Proof
Denote with $\tau_{\mathbf x}: \R^n \to \R^n$ the translation by $\mathbf x$.
From Translation in Euclidean Space is Measurable Mapping, $\tau_{\mathbf x}$ is $\map \BB {\R^n} \, / \, \map \BB {\R^n}$-measurable.
Consider the pushforward measure $\lambda^n_{\mathbf x} := \paren {\tau_{\mathbf x} }_* \lambda^n$ on $\map \BB {\R^n}$.

By Characterization of Euclidean Borel Sigma-Algebra, it follows that:

$\map \BB {\R^n} = \map \sigma {\JJ^n_{ho} }$
where $\sigma$ denotes generated $\sigma$-algebra, and $\JJ^n_{ho}$ is the set of half-open $n$-rectangles.

Let us verify the four conditions for Uniqueness of Measures, applied to $\lambda^n$ and $\lambda^n_{\mathbf x}$.
Condition $(1)$ follows from Half-Open Rectangles Closed under Intersection.
Condition $(2)$ is achieved by the sequence of half-open $n$-rectangles given by:

$J_k := \hointr {-k} k^n$

For condition $(3)$, let $\horectr {\mathbf a} {\mathbf b} \in \JJ^n_{ho}$ be a half-open $n$-rectangle.
Since:

$\map {\tau_{\mathbf x}^{-1} } {\horectr {\mathbf a} {\mathbf b} } = \mathbf x + \horectr {\mathbf a} {\mathbf b} = \horectr {\mathbf {a + x} } {\mathbf {b + x} }$
we have:














\(\ds \map {\lambda^n_{\mathbf x} } {\horectr {\mathbf a} {\mathbf b} }\)

\(=\)







\(\ds \map {\lambda^n} {\horectr {\mathbf {a + x} } {\mathbf {b + x} } }\)





Definition of Pushforward Measure














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \paren {\paren {b_i + x_i} - \paren {a_i + x_i} }\)





Definition of Lebesgue Measure














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \paren {b_i - a_i}\)




















\(\ds \)

\(=\)







\(\ds \map {\lambda^n} {\horectr {\mathbf a} {\mathbf b} }\)





Definition of Lebesgue Measure



Finally, since:

$\ds \map {\lambda^n} {J_k} = \prod_{i \mathop = 1}^n \paren {k - \paren {-k} } = \paren {2 k}^n$
the last condition, $(4)$, is also satisfied.

Whence Uniqueness of Measures implies that:

$\lambda^n_{\mathbf x} = \lambda^n$
and since for all $B \in \map \BB {\R^n}$ we have:

$\mathbf x + B = \map {\tau_{\mathbf x}^{-1} } B$
this precisely boils down to:

$\map {\lambda^n} {\mathbf x + B} = \map {\lambda^n} B$
$\blacksquare$


Motivation
This theorem formalizes the physical intuition that the size of an object does not depend on its position.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $4.9 \ \text{(i)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $5.8 \ \text{(i)}$




