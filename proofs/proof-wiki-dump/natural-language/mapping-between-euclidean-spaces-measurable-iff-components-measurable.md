# 

Source: https://proofwiki.org/wiki/Mapping_between_Euclidean_Spaces_Measurable_iff_Components_Measurable



Theorem
Let $\R^n$ and $\R^m$ be Euclidean spaces.
Denote by $\BB^n$ and $\BB^m$ their respective Borel $\sigma$-algebras.
Denote with $\BB$ the Borel $\sigma$-algebra on $\R$.
Let $f: \R^n \to \R^m$ be a mapping, and write:

$\map f {\mathbf x} = \begin{bmatrix} \map {f_1} {\mathbf x} \\ \vdots \\ \map {f_m} {\mathbf x} \end{bmatrix}$
with, for $1 \le i \le m$, $f_i: \R^n \to \R$.

Then $f$ is $\BB^n \, / \, \BB^m$-measurable if and only if:

$\forall i: f_i: \R^n \to \R$ is $\BB^n \, / \, \BB$-measurable


Proof
Necessary Condition
Suppose that $f$ is $\BB^n \, / \, \BB^m$-measurable.
It is to be shown that for $1 \le i \le m$, $f_i: \R^n \to \R$ is $\BB^n \, / \, \BB$-measurable.

By Mapping Measurable iff Measurable on Generator and Characterization of Euclidean Borel Sigma-Algebra, it suffices to show that:

$\map {f_i^{-1} } {\openint a b} \in \BB^n$
for every open real interval $\openint a b$.
Since $\map f {\mathbf x} = \mathbf y$ if and only if, for all $i$, $\map {f_i} {\mathbf x} = y_i$, it follows that:

$\mathbf x \in \map {f^{-1} } {\mathbf y} \iff \forall i: \mathbf x \in \map {f_i^{-1} } {y_i}$
That is, if and only if $\ds \mathbf x \in \bigcap_{i \mathop = 1}^m \map {f_i^{-1} } {y_i}$.
By Preimage of Union under Mapping, it follows that for any $B \in \BB^m$:

$\mathbf x \in \map {f^{-1} } B \iff \exists \mathbf y \in B: \forall i: \mathbf x \in \map {f_i^{-1} } {y_i}$

In particular, consider the open set $B = \set {\mathbf y \in \R^n: y_i \in \openint a b}$.
Then by construction of $B$, $\mathbf x \in \map {f_i^{-1} } {\openint a b}$ if and only if $\map f x \in B$.
Therefore, $\map {f_i^{-1} } {\openint a b} = \map {f^{-1} } B$.
Since $B$ is open, it is also measurable by Characterization of Euclidean Borel Sigma-Algebra.

Thus $\map {f_i^{-1} } {\openint a b} \in \BB^n$ as $f$ was assumed $\BB^n \, / \, \BB^m$-measurable.


This article needs to be linked to other articles.In particular: To appropriate versions of Definition:PreimageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
$\Box$


Sufficient Condition
Suppose that all $f_i$ are $\BB^n \, / \, \BB$-measurable.
It is to be shown that $f$ is $\BB^n \, / \, \BB^m$-measurable.

By Mapping Measurable iff Measurable on Generator and Characterization of Euclidean Borel Sigma-Algebra, it suffices to show that:

$\map {f^{-1} } {\horectr {\mathbf a} {\mathbf b}} \in \BB^n$
for every half-open $m$-rectangle $\horectr {\mathbf a} {\mathbf b}$.

Now observe, for all $\mathbf x \in \R^n$:














\(\ds \map f {\mathbf x}\)

\(\in\)







\(\ds \horectr {\mathbf a} {\mathbf b}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i: \, \)



\(\ds \map {f_i} {\mathbf x}\)

\(\in\)







\(\ds \hointr {a_i} {b_i}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf x\)

\(\in\)







\(\ds \bigcap_{i \mathop = 1}^m \map {f_i^{-1} } {\hointr {a_i} {b_i} }\)









Thus:

$\ds \map {f^{-1} } {\horectr {\mathbf a} {\mathbf b} } = \bigcap_{i \mathop = 1}^m \map {f_i^{-1} } {\hointr {a_i} {b_i} }$
Now the $f_i^{-1} \hointr {a_i} {b_i}$ are measurable sets since the $f_i$ are $\BB^n \, / \, \BB$-measurable.

Since $\BB^n$ is a $\sigma$-algebra, Sigma-Algebra Closed under Countable Intersection applies, and it follows that:

$\map {f^{-1} } {\horectr {\mathbf a} {\mathbf b} } \in \BB^n$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $5$




