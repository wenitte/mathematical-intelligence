# 

Source: https://proofwiki.org/wiki/Positive_Linear_Functional_on_C*-Algebra_is_Real_on_Hermitian_Elements

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\phi : A \to \C$ be a positive linear functional.
Let $x \in A$ be Hermitian.

Then $\map \phi x \in \R$. 


Proof
From Hermitian Element of C*-Algebra Decomposes into Positive Elements, there exists positive elements $x^+, x^- \in A$ such that:

$x = x^+ - x^-$
Since $f$ is positive, we have $\map \phi {x^+} \ge 0$ and $\map \phi {x^-} \ge 0$. 
Hence from linearity:

$\map \phi x = \map \phi {x^+} - \map \phi {x^-} \in \R$
$\blacksquare$





