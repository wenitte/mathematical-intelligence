# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Hilbert_Space



Theorem
Let $H$ be a vector space over $\mathbb F \in \set {\R, \C}$.
The following definitions of the concept of Hilbert space are equivalent:

Definition 1
Let $\struct {H, \innerprod \cdot \cdot_H}$ be an inner product space.
Let $d: H \times H \to \R_{\ge 0}$ be the metric induced by the inner product norm $\norm {\,\cdot\,}_H$.
Let $\struct {H, d}$ be a complete metric space. 

Then $H$ is a Hilbert space over $\mathbb F$.

Definition 2
Let $\struct {H, \norm {\,\cdot\,}_H}$ be a Banach space with norm $\norm {\,\cdot\,}_H : H \to \R_{\ge 0}$.
Let $H$ have an inner product $\innerprod \cdot \cdot_H : H \times H \to \C$ such that the inner product norm is equivalent to the norm $\norm {\,\cdot\,}_H$.

Then $H$ is a Hilbert space over $\mathbb F$.


Proof
Definition 1 implies Definition 2
By definition of complete metric space, every Cauchy sequence in $H$ is convergent.
By definition of Banach space, it follows that $\struct { H, \norm {\,\cdot\,}_H }$ is a Banach space.
$\Box$

Definition 2 implies Definition 1
By definition of inner product space, it follows that $\struct { H, \innerprod \cdot \cdot_H }$ is an inner product space.
Denote the inner product norm as $\norm {\,\cdot\,}_*$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $\struct {H, \norm {\,\cdot\,}_H}$.
By definition of Banach space, it follows that $\sequence {x_n}_{n \mathop \in \N}$ is a convergent sequence in $\struct {H, \norm {\,\cdot\,}_H}$.
By Cauchy Sequences in Vector Spaces with Equivalent Norms Coincide, it follows that $\sequence {x_n}_{n \mathop \in \N}$ is a Cauchy sequence in $\struct {H, \norm {\,\cdot\,}_*}$.
By Convergent Sequences in Vector Spaces with Equivalent Norms Coincide, it follows that $\sequence {x_n}_{n \mathop \in \N}$ is a convergent sequence in $\struct {H, \norm {\,\cdot\,}_*}$.
Let $d: H \times H \to \R_{\ge 0}$ be the metric induced by the inner product norm $\norm {\,\cdot\,}_*$.
By definition of complete metric space, it follows that $\struct {H, d}$ is a complete metric space. 
$\blacksquare$





