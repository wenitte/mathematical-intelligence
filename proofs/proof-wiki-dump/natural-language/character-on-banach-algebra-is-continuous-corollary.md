# 

Source: https://proofwiki.org/wiki/Character_on_Banach_Algebra_is_Continuous/Corollary

Corollary
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$.
Let $\phi : A \to \C$ be a character on $A$.

Then:

$\norm \phi_{A^\ast} = 1$


Proof
From Character on Banach Algebra is Continuous, we have that $\phi$ is continuous with $\norm \phi_{A^\ast} \le 1$. 
So, we have:

$\ds \sup_{x \in A, \, \norm x = 1} \cmod {\map \phi x} \le 1$
We have that $\norm { {\mathbf 1}_A} = 1$ and $\map \phi { {\mathbf 1}_A} = 1$, so we have:

$\ds \sup_{x \in A, \, \norm x = 1} \cmod {\map \phi x} = 1$
So $\norm \phi_{A^\ast} = 1$.
$\blacksquare$





