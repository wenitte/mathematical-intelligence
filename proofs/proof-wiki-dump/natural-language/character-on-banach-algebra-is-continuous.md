# 

Source: https://proofwiki.org/wiki/Character_on_Banach_Algebra_is_Continuous

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$.
Let $\phi : A \to \C$ be a character on $A$.

Then $\phi$ is continuous and further:

$\norm \phi_{A^\ast} \le 1$


Corollary
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$.
Let $\phi : A \to \C$ be a character on $A$.

Then:

$\norm \phi_{A^\ast} = 1$


Proof
Let $\map G A$ be the group of units of $A$.
Suppose first that $\struct {A, \norm {\, \cdot \,} }$ is unital.
We show that:

$\cmod {\map \phi x} \le \norm x$ for each $x \in A$.
From Continuity of Linear Functionals, we will then have that $\phi$ is continuous with $\norm \phi_{A^\ast} \le 1$.
Aiming for a contradiction, suppose that $x \in A$ is such that:

$\cmod {\map \phi x} > \norm x$
Since then $\map \phi x \ne 0$, we have $x \ne {\mathbf 0}_A$.
From Norm Axiom $\text N 2$: Positive Homogeneity, we have:

$\ds \norm {\frac x {\map \phi x} } < 1$
From Element of Unital Banach Algebra Close to Identity is Invertible, we have that:

$\ds {\mathbf 1}_A - \frac x {\map \phi x} \in \map G A$
So there exists $z \in A$ such that:

$\ds z \paren { {\mathbf 1}_A - \frac x {\map \phi x} } = {\mathbf 1}_A$
From Character on Unital Banach Algebra is Unital Algebra Homomorphism, we have $\map \phi { {\mathbf 1}_A} = 1$. 
So, we have:














\(\ds 1\)

\(=\)







\(\ds \map \phi { {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {z \paren { {\mathbf 1}_A - \frac x {\map \phi x} } }\)




















\(\ds \)

\(=\)







\(\ds \map \phi z \map \phi { {\mathbf 1}_A - \frac x {\map \phi x} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi z \paren {\map \phi { {\mathbf 1}_A} - \frac {\map \phi x} {\map \phi x} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi z \paren {1 - 1}\)




















\(\ds \)

\(=\)







\(\ds 0\)









This is a contradiction since $A \ne \set { {\mathbf 0}_A}$.
Hence we have:

$\norm {\map \phi x} \le \norm x$ for all $x \in A$.
So we have that $\phi$ is continuous with:

$\norm \phi_{A^\ast} \le 1$

Now suppose that $\struct {A, \norm {\, \cdot \,} }$ is not unital.
Let $\struct {A_+, \norm {\, \cdot \,}_{A_+} }$ be the normed unitization of $\struct {A, \norm {\, \cdot \,} }$.
Define $\phi_+ : A_+ \to \C$ by: 

$\map {\phi_+} {\tuple {x, \lambda} } = \map \phi x + \lambda$
for each $\tuple {x, \lambda} \in A_+$.
From Character on Non-Unital Banach Algebra induces Character on Unitization, $\phi_+$ is a character on $A_+$.
Further:

$\map {\phi_+} {\tuple {x, 0} } = \map \phi x$ for each $x \in A$.
From the unital case, we have that $\phi_+$ is continuous with $\norm {\phi_+}_{A_+^\ast} \le 1$.
Then, we have:














\(\ds \cmod {\map \phi x}\)

\(=\)







\(\ds \cmod {\map {\phi_+} {\tuple {x, 0} } }\)




















\(\ds \)

\(\le\)







\(\ds \norm {\tuple {x, 0} }_{A_+}\)




















\(\ds \)

\(=\)







\(\ds \norm x\)









So $\phi$ is continuous with $\norm \phi_{A^\ast} \le 1$.
$\blacksquare$





