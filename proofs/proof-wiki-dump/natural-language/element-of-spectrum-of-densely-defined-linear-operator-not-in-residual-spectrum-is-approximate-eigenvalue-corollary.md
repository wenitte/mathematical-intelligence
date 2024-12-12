# 

Source: https://proofwiki.org/wiki/Element_of_Spectrum_of_Densely-Defined_Linear_Operator_not_in_Residual_Spectrum_is_Approximate_Eigenvalue/Corollary

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\struct {\map D T, T}$ be a self-adjoint densely-defined linear operator.
Let $\map \sigma T$ be the spectrum of $\struct {\map D T, T}$.
Let $\lambda \in \map \sigma T$. 

Then $\lambda$ is an approximate eigenvalue of $\struct {\map D T, T}$.


Proof
Let $\map {\sigma_r} T$ be the residual spectrum of $\struct {\map D T, T}$.
From Self-Adjoint Densely-Defined Linear Operator has Empty Residual Spectrum, we have $\map {\sigma_r} T = \emptyset$. 
Hence we have $\lambda \in \map \sigma T \setminus \map {\sigma_r} T$.
From Element of Spectrum of Densely-Defined Linear Operator not in Residual Spectrum is Approximate Eigenvalue, we therefore have that $\lambda$ is an approximate eigenvalue of $\struct {\map D T, T}$.
$\blacksquare$





