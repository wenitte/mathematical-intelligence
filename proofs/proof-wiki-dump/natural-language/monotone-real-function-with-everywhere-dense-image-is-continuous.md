# 

Source: https://proofwiki.org/wiki/Monotone_Real_Function_with_Everywhere_Dense_Image_is_Continuous


This article needs to be linked to other articles.In particular: Review targets of links, and make sure they point to specific instances rather than the general casesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $I$ and $J$ be real intervals.
Let $f: I \to J$ be a monotone real function.
Let $f \sqbrk I$ be everywhere dense in $J$, where $f \sqbrk I$ denotes the image of $I$ under $f$.

Then $f$ is continuous on $I$.


Proof
Without loss of generality, let $f$ be increasing.
Aiming for a contradiction, suppose $f$ is discontinuous at $c \in I$.
Let:

$L^-$ denote $\ds \lim_{x \mathop \to c^-} \map f x$
$L$ denote $\map f c$
$L^+$ denote $\ds \lim_{x \mathop \to c^+} \map f x$
From Discontinuity of Monotonic Function is Jump Discontinuity, $L^-$ and $L^+$ are (finite) real numbers.
From Limit of Monotone Real Function: Corollary:

$L^- \le L \le L^+$
Let $S = \openint {L^-} {L^+}$.
If $L^- = L = L^+$, then $c$ is not a discontinuity, a contradiction.
Thus $S$ is non-degenerate.
From Non-Degenerate Real Interval is Infinite, $S$ is infinite.
From Relative Difference between Infinite Set and Finite Set is Infinite, $S \setminus \set L$ is  non-empty.
From Finite Subset of Metric Space is Closed, $\set L$ is closed.
From Open Set minus Closed Set is Open, $S \setminus \set L$ is open.


Lemma
$\ds \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x} \cap f \sqbrk I \subseteq \set {\map f c}$
$\Box$

Thus:














\(\ds S \cap f \sqbrk I\)

\(\subseteq\)







\(\ds \set L\)





Lemma








\(\ds \leadsto \ \ \)





\(\ds \paren {S \cap f \sqbrk I} \setminus \set L\)

\(\subseteq\)







\(\ds \set L \setminus \set L\)





Set Difference over Subset














\(\ds \)

\(=\)







\(\ds \O\)





Set Difference with Self is Empty Set








\(\ds \leadsto \ \ \)





\(\ds \paren {S \cap f \sqbrk I} \setminus \set L\)

\(=\)







\(\ds \O\)





Subset of Empty Set iff Empty








\(\ds \leadsto \ \ \)





\(\ds \O\)

\(=\)







\(\ds \paren {S \cap f \sqbrk I \setminus \set L}\)





Equality is Symmetric














\(\ds \)

\(=\)







\(\ds \paren { S \setminus \set L} \cap f \sqbrk I\)





Intersection with Set Difference is Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {\paren {\openint {L^-} L \cup \set L \cup \openint L {L^+} } \setminus \set L} \cap f \sqbrk I\)





Break $S$ into $3$  disjoint open intervals














\(\ds \)

\(=\)







\(\ds \paren {\paren {\openint {L^-} L \cup \openint L {L^+} } \setminus \set L} \cap f \sqbrk I\)





Set Difference with Union is Set Difference














\(\ds \)

\(=\)







\(\ds \paren {\openint {L^-} L \cup \openint L {L^+} } \cap f \sqbrk I\)





Set Difference with Disjoint Set



Thus there exists a non-empty open subset of $f \sqbrk I$ that is disjoint from $Y$.


This article, or a section of it, needs explaining.In particular: What is $Y$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From Open Set Characterization of Denseness, $f \sqbrk I$ is not everywhere dense in $J$.
This contradicts the hypothesis that $f \sqbrk I$ is everywhere dense in $J$.
Therefore $I$ contains no discontinuities, by Proof by Contradiction.

The same argument, mutatis mutandis, proves the case where $f$ is decreasing
Hence the result, by Proof by Cases.
$\blacksquare$





