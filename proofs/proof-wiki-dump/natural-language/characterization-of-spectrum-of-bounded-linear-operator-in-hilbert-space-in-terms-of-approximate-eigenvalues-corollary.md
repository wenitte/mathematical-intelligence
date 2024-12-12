# 

Source: https://proofwiki.org/wiki/Characterization_of_Spectrum_of_Bounded_Linear_Operator_in_Hilbert_Space_in_terms_of_Approximate_Eigenvalues/Corollary

Corollary
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $T : \HH \to \HH$ be a self-adjoint bounded linear operator.
Let $\map \sigma T$ be the spectrum of $T$.

Then $\lambda \in \map \sigma T$ if and only if $\lambda$ is an approximate eigenvalue of $T$.


Proof
From Adjoint is Involutive, we have $T^{\ast \ast} = T$.
Hence from Characterization of Spectrum of Bounded Linear Operator in Hilbert Space in terms of Approximate Eigenvalues, we have that $\lambda \in \map \sigma T$ if and only if $\lambda$ is an approximate eigenvalue of $T$ or $\overline \lambda$ is an eigenvalue of $T$.
From Spectrum of Self-Adjoint Bounded Linear Operator is Real, we have:

$\map \sigma T \subseteq \R$
Hence we have that $\lambda \in \map \sigma T$ only if $\lambda \in \R$. 
So we obtain that $\lambda \in \map \sigma T$ if and only if $\lambda$ is an approximate eigenvalue of $T$ or $\lambda$ is an eigenvalue of $T$.
From Eigenvalue of Bounded Linear Operator is Approximate Eigenvalue, an eigenvalue is an approximate eigenvalue, so we conclude that $\lambda \in \map \sigma T$ if and only if $\lambda$ is an approximate eigenvalue of $T$.
$\blacksquare$





