# 

Source: https://proofwiki.org/wiki/Mean_Ergodic_Theorem_(Hilbert_Space)/Lemma

Lemma
Let $\GF \in \set {\R, \C}$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\mathbb F$.
Let $U : \HH \to \HH$ be a bounded linear operator such that:

$\forall f \in \HH : \norm {\map U f} \le \norm f$

Let $B \subseteq \HH$ be the linear subspace defined as:

$B := \set {\map U h - h : h \in \HH }$

Then:

$I^\perp \subseteq \overline B$


Proof
It suffice to show $B^\perp \subseteq I$.
Indeed, then it follows:














\(\ds I ^\perp\)

\(\subseteq\)







\(\ds \paren {B^\perp} ^\perp\)





Orthocomplement Reverses Subset














\(\ds \)

\(=\)







\(\ds \overline B\)





Double Orthocomplement is Closed Linear Span




Recall that the adjoint $U^\ast$ of $U$ exists by Existence and Uniqueness of Adjoint.

Let $f \in B^\perp$.
Then $\map U f = f$, as:














\(\ds \norm {\map {U^\ast} f - f}^2\)

\(=\)







\(\ds \innerprod {\map {U^\ast} f - f} {\map {U^\ast} f - f}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {\map {U^\ast} f} g - \innerprod f g\)





where $g := \map {U^\ast} f - f$














\(\ds \)

\(=\)







\(\ds \innerprod f {\map U g - g}\)




















\(\ds \)

\(=\)







\(\ds 0\)





as $\map U g - g \in B$



Therefore $\map U f = f$, as:














\(\ds \norm {\map U f - f}^2\)

\(=\)







\(\ds \innerprod {\map U f - f} {\map U f - f}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {\map U f} {\map U f} - \innerprod {\map U f} f - \innerprod f {\map U f} + \norm f^2\)




















\(\ds \)

\(\le\)







\(\ds 2 \norm f^2 - \innerprod {\map U f} f - \innerprod f {\map U f}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 2 \norm f^2 - \innerprod f {\map {U^\ast} f} - \innerprod {\map {U^\ast} f} f\)




















\(\ds \)

\(=\)







\(\ds 0\)





as $\map {U^\ast} f = f$



$\blacksquare$





