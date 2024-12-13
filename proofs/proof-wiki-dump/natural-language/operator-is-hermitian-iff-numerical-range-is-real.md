# 

Source: https://proofwiki.org/wiki/Operator_is_Hermitian_iff_Numerical_Range_is_Real



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ be a Hilbert space over $\C$. 
Let $A : \HH \to \HH$ be a bounded linear operator.
Let $\map W A$ be the numerical range of $A$.

Then $A$ is Hermitian if and only if:

$\map W A \subseteq \R$
That is:

$\forall h \in \HH: \innerprod {A h} h_\HH \mathop \in \R$


Proof
Necessary Condition
Suppose that $A$ is Hermitian. 
Then: 

$A^* = A$
where $A^*$ denotes the adjoint of $A$.
Let $x \in \HH$. 
Then, by the definition of the adjoint, we have: 

$\innerprod {A x} x_\HH = \innerprod x {A x}_\HH$
From the conjugate symmetry of the inner product, we have: 

$\innerprod x {A x}_\HH = \overline {\innerprod {A x} x_\HH}$
So:

$\innerprod {A x} x_\HH = \overline {\innerprod {A x} x_\HH}$
So, from Complex Number equals Conjugate iff Wholly Real:

$\innerprod {A x} x_\HH$ is a real number.
$\Box$


Sufficient Condition
Suppose that: 

$\innerprod {A x} x_\HH$ is a real number for each $x \in \HH$.
Let $\alpha \in \C$. 
Let $x, y \in \HH$. 
We have: 














\(\ds \innerprod {\map A {x + \alpha y} } {x + \alpha y}_\HH\)

\(=\)







\(\ds \innerprod {A x + \alpha A y} {x + \alpha y}_\HH\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod {A x} {x + \alpha y}_\HH + \alpha \innerprod {A y} {x + \alpha y}_\HH\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \innerprod {A x} x_\HH + \overline \alpha \innerprod {A x} y_\HH + \alpha \innerprod {A y} x_\HH + \alpha \overline \alpha \innerprod {A y} y_\HH\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \innerprod {A x} x_\HH + \overline \alpha \innerprod {A x} y_\HH + \alpha \innerprod {A y} x_\HH + \size \alpha^2 \innerprod {A y} y_\HH\)





Product of Complex Number with Conjugate



We have that: 

$\innerprod {\map A {x + \alpha y} } {x + \alpha y}_\HH$
is a real number.
Note that both: 

$\innerprod {A x} x_\HH$
and:

$\size \alpha^2 \innerprod {A y} y_\HH$
are also real numbers.
So, we must have that:

$\overline \alpha \innerprod {A x} y_\HH + \alpha \innerprod {A y} x_\HH$
is a real number.
We therefore have: 














\(\ds \overline \alpha \innerprod {A x} y_\HH + \alpha \innerprod {A y} x_\HH\)

\(=\)







\(\ds \overline {\overline \alpha \innerprod {A x} y_\HH + \alpha \innerprod {A y} x_\HH}\)





Complex Number equals Conjugate iff Wholly Real














\(\ds \)

\(=\)







\(\ds \overline {\overline \alpha \innerprod {A x} y_\HH} + \overline {\alpha \innerprod {A y} x_\HH}\)





Sum of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \alpha \overline {\innerprod {A x} y_\HH} + \overline \alpha \overline {\innerprod {A y} x_\HH}\)





Product of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \alpha \innerprod y {A x}_\HH + \overline \alpha \innerprod x {A y}_\HH\)





conjugate symmetry of inner product














\(\ds \)

\(=\)







\(\ds \alpha \innerprod {A^* y} x_\HH + \overline \alpha \innerprod {A^* x} y_\HH\)





Definition of Adjoint Linear Transformation, Adjoint is Involutive



Setting $\alpha = 1$, we have: 

$\innerprod {A x} y_\HH + \innerprod {A y} x_\HH = \innerprod {A^* y} x_\HH + \innerprod {A^* x} y_\HH$
Setting $\alpha = i$, we have: 

$-i \innerprod {A x} y_\HH + i \innerprod {A y} x_\HH = i \innerprod {A^* y} x_\HH - i \innerprod {A^* y} x_\HH$
Dividing by $i$ we have: 

$-\innerprod {A x} y_\HH + \innerprod {A y} x_\HH = \innerprod {A^* y} x_\HH - \innerprod {A^* y} x_\HH$
So:

$2 \innerprod {A y} x_\HH = 2 \innerprod {A^* y} x_\HH$
giving:

$\innerprod {A y} x_\HH = \innerprod {A^* y} x_\HH$
From Inner Product is Sesquilinear:

$\innerprod {A y - A^* y} x_\HH = 0$
Setting $x = A y - A^* y$ we have: 

$\innerprod {A y - A^* y} {A y - A^* y}_\HH = 0$
From the positiveness of the inner product we have: 

$A y - A^* y = 0$
so:

$A y = A^* y$
Since $y \in \HH$ was arbitrary, we have: 

$A = A^*$
That is:

$A$ is Hermitian.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.12$




