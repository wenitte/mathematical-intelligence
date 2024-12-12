# 

Source: https://proofwiki.org/wiki/Existence_of_Approximate_Identity_of_C*-Algebra_arising_from_Dense_Ideal

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $I$ be an everywhere dense ideal of $A$.
Let $\le_A$ be the canonical preordering of $A$. 
Let $A_{\mathbf{SA} }$ be the set of Hermitian elements of $A$.
Let:

$\EE = \set {e \in I \cap A_{\mathbf{SA} } : \map {\sigma_A} e \subseteq \hointr 0 1}$

Then $\tuple {\EE, \le_A}$ is directed and $\EE$ is an approximate identity of $A$.


Proof
Let $a, b \in \EE$.
We want to show that there exists $d \in \EE$ such that $a \le_A d$ and $b \le_A d$. 
Let $A_+$ be the unitization of $A$. 
Define:

$\tuple {x, \lambda}^\ast = \tuple {x^\ast, \overline \lambda}$
for each $\tuple {x, \lambda}$. 
From:

Existence of Unitization of C*-Algebra if $A$ is non-unital
Existence of Unique C* Norm on Unitization of Unital C*-Algebra if $A$ is unital
there exists a algebra norm $\norm {\, \cdot \,}_\ast$ such that $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ is a $\text C^\ast$-algebra and $\norm {\tuple {a, 0} }_\ast = \norm a$ for each $a \in A$.
Let ${\mathbf 1}_+$ be the identity element of $A_+$.
Let $\le_+$ be the canonical preordering of $A_+$. 
From Spectrum of Element of Banach Algebra is Compact and Spectrum of Element in Unitization of Unital Algebra, there exists $\beta < 1$ such that:

$\map {\sigma_{A_+} } {\tuple {a, 0} } \subseteq \closedint 0 \beta$
and:

$\map {\sigma_{A_+} } {\tuple {b, 0} } \subseteq \closedint 0 \beta$
Define $\phi : \closedint 0 \beta \to \R$ by:

$\map \phi t = \dfrac t {1 - t}$
for each $t \in \closedint 0 \beta$.
Note that $\map \phi x \in \hointr 0 1$ for $x \in \closedint 0 \beta$. 
Define $\psi : \hointr 0 \infty \to \R$ by:

$\ds \map \psi t = \frac t {1 + t} = 1 - \frac 1 {1 + t}$
for each $t \in \hointr 0 \infty$.
Let:

$c = \map \phi {\tuple {a, 0} } + \map \phi {\tuple {b, 0} }$
where $\map \phi {\tuple {a, 0} }$ and $\map \phi {\tuple {b, 0} }$ are obtained from the continuous functional calculus.
From Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative, we have that $\map \phi {\tuple {a, 0} }$ and $\map \phi {\tuple {b, 0} }$ are positive.
From Sum of Two Positive Elements of C*-Algebra is Positive, $c$ is positive.
Let $d = \map \psi c$, where again $\map \psi c$ is obtained from the continuous functional calculus.
Again from Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative, $d$ is positive.
Further since:

$\ds 0 < \frac 1 {1 + t} \le 1$
for $t \ge 0$, we have $\map \psi t \in \hointr 0 1$ and hence:

$\map {\sigma_{A_+} } d \subseteq \hointr 0 1$
from the Spectral Mapping Theorem.

We first show that $d \in I_0$.
For clarity write:

$I_0 = \set {\tuple {a, 0} : a \in I} \subseteq A_+$
From Ideal of Algebra over Field Embeds into Unitization as Ideal, $I_0$ is an ideal of $A$.
From Continuous Functional Calculus of Reciprocal is Inverse Element and since the continuous functional calculus is an algebra homomorphism, we have:

$\map \phi {\tuple {a, 0} } = \tuple {a, 0} \paren { {\mathbf 1}_+ - \tuple {a, 0} }^{-1}$
and:

$\map \phi {\tuple {b, 0} } = \tuple {b, 0} \paren { {\mathbf 1}_+ - \tuple {b, 0} }^{-1}$
Since $I_0$ is an ideal and $\tuple {a, 0}, \tuple {b, 0} \in I$, we have $\map \phi {\tuple {a, 0} } \in I_0$ and $\map \phi {\tuple {b, 0} } \in I_0$. 
Hence $c \in I_0$.
Again from Continuous Functional Calculus of Reciprocal is Inverse Element and since the continuous functional calculus is an algebra homomorphism, we have:

$\map \psi c = c \paren { {\mathbf 1}_+ + c}^{-1}$
Hence $d \in I_0$.

Write $d = \tuple {M, 0}$ for $M \in I$.
From Spectrum of Element in Unitization of Unital Algebra and (in the case of $A$ not unital the definition of the spectrum in a non-unital algebra, we have:

$\map {\sigma_A} M \subseteq \map {\sigma_{A_+} } d \subseteq \hointr 0 1$
We also see that $M$ is Hermitian since $d$ is. 
Hence $M \in \EE$.
We show that $a \le_A M$ and $b \le_A M$.
Set $x = \map \phi a$. 
Note that the proof remains identical considering $x = \map \phi b$. 
From $(1)$ in the definition of a preordered vector space, we have:

$\map \phi {\tuple {a, 0} } \le_+ \map \phi {\tuple {a, 0} } + \map \phi {\tuple {b, 0} } = c$
That is, ${\mathbf 0}_+ \le_+ x \le_+ c$.
Applying $(1)$ in the definition of a preordered vector space again, we have:

${\mathbf 1}_+ \le_+ {\mathbf 1}_+ + x \le_+ {\mathbf 1}_+ c$
Hence from Inverse reverses Preorder of Positive Invertible Elements of Unital C*-Algebra, we have:

$\paren { {\mathbf 1}_+ + c}^{-1} \le_+ \paren { {\mathbf 1}_+ + x}^{-1}$
From Scalar Multiplication by Minus One reverses Preordering in Vector Space and $(1)$ in the definition of a preordered vector space, we have:

${\mathbf 1}_+ - \paren { {\mathbf 1}_+ + x}^{-1} \le_+ {\mathbf 1}_+ - \paren { {\mathbf 1}_+ + c}^{-1}$
From Continuous Functional Calculus of Reciprocal is Inverse Element we have:

$\map \psi x = {\mathbf 1}_+ - \paren { {\mathbf 1}_+ + x}^{-1}$
and:

$\map \psi c = {\mathbf 1}_+ - \paren { {\mathbf 1}_+ + c}^{-1}$
We have $x = \map \phi x$ and for $t \in \closedint 0 \beta$ we have:














\(\ds \map {\paren {\psi \circ \phi} } t\)

\(=\)







\(\ds 1 - \frac 1 {1 + \frac t {1 - t} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac 1 {\frac {1 - t + t} {1 - t} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \paren {1 - t}\)




















\(\ds \)

\(=\)







\(\ds t\)









Hence from Continuous Functional Calculus obeys Composition, we have:

$\map \psi x = \map \psi {\map \phi {\tuple {a, 0} } } = \map {\paren {\psi \circ \phi} } {\tuple {a, 0} } = \tuple {a, 0}$
and:

$\map \psi c = d = \tuple {M, 0}$
Hence we obtain:

$\tuple {a, 0} \le_+ \tuple {M, 0}$
From Element of C*-Algebra is Positive iff Positive in Unitization: Corollary, we have:

$a \le_A M$
As noted before, the proof works identically if instead $x = \map \phi b$, so we also obtain:

$b \le_A M$
Hence $\EE$ is directed.

We first show that $\family {x e}_{e \in \EE}$ converges to $x$ for $x \in A$ positive.
First take $x \in I$.
From $(1)$ in the definition of a preordered vector space, we have that $n x$ is positive for each $n \in \N$.
Hence from Element of C*-Algebra is Positive iff Positive in Unitization: Corollary we have that $\tuple {n x, 0}$ is positive in $A_+$.
Set $a_n = \map \psi {\tuple {n x, 0} }$.
As before we have $a_n = \tuple {n x, 0} \paren { {\mathbf 1}_+ + \tuple {n x, 0} }^{-1}$.
Hence $a_n \in I_0$, since $n x \in I$. 
We can therefore write $a_n = \tuple {b_n, 0}$ for $b_n \in I$. 
From Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative, $a_n$ is positive in $A_+$. 
Since $\map \psi t \in \hointr 0 1$ for $t \ge 0$, we have that:

$\map {\sigma_{A_+} } {a_n} \subseteq \hointr 0 1$
from the Spectral Mapping Theorem.
From Spectrum of Element in Unitization of Unital Algebra or the definition of the spectrum in a non-unital algebra, we have:

$\map {\sigma_A} {b_n} \cup \set 0 = \map {\sigma_{A_+} } {a_n} \subseteq \hointr 0 1$
Hence $\map {\sigma_A} {b_n} \subseteq \hointr 0 1$. 
So $b_n \in \EE$.
Define $\eta : \hointr 0 \infty \to \R$ by:

$\map \eta t = t^2 \paren {1 - \map \psi {n t} } = t \paren {1 - \map \psi {n t} } t$
That is:

$\map \eta t = \dfrac {t^2} {1 + n t}$
Note that:

$\ds \frac {t^2} {1 + n t} \le \frac t n$
We have, since the continuous functional calculus is an algebra homomorphism and applying Continuous Functional Calculus of Reciprocal is Inverse Element:

$\map \eta {\tuple {x, 0} } = \tuple {x, 0} \paren { {\mathbf 1}_+ - a_n} \tuple {x, 0}$
Since the continuous functional calculus is an isometry we have:

$\norm {\tuple {x, 0} \paren { {\mathbf 1}_+ - a_n} \tuple {x, 0} }_\ast = \set {\cmod {\map \eta z} : z \in \map {\sigma_{A_+} } {\tuple {x, 0} } }$
We have $\map {\sigma_{A_+} } {\tuple {x, 0} } \subseteq \hointr 0 \infty$, and hence:

$0 \le \map \eta t \le \dfrac t n$
for each $t \in \map {\sigma_{A_+} } {\tuple {x, 0} }$.
From Spectrum of Element of Banach Algebra is Bounded, we have $t \le \norm {\tuple {x, 0} }_\ast = \norm x$ for all $t \in \map {\sigma_{A_+} } {\tuple {x, 0} }$.
Hence we have:

$\ds \norm {\tuple {x, 0} \paren { {\mathbf 1}_+ - a_n} \tuple {x, 0} }_\ast \le \frac {\norm x} n$
Let $\epsilon > 0$.
Take $n > \epsilon^{-2} \norm x$. 
Then we have:

$\norm {\tuple {x, 0} \paren { {\mathbf 1}_+ - a_n} \tuple {x, 0} }_\ast < \epsilon^2$
For such an $n$, take $e \in \EE$ with $e \ge_A b_n$. 
From Element of C*-Algebra is Positive iff Positive in Unitization: Corollary, we have:

${\mathbf 0}_+ \le_+ a_n \le_+ \tuple {e, 0} \le_+ {\mathbf 1}_+$
From Bound for Norm of Difference of Element with Non-Negative Multiple of Element in Unital C*-Algebra and Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum, we have:

$\ds \norm {\tuple {x, 0} - \tuple {e, 0} \tuple {x, 0} }^2_\ast \le \norm {\tuple {x, 0} \paren { {\mathbf 1}_+ - a_n} \tuple {x, 0} }_\ast < \epsilon^2$
since $\tuple {x, 0}$ is Hermitian. 
Hence we have:

$\norm {\tuple {x - x e, 0} }^2_\ast = \norm {x - x e}^2 < \epsilon^2$
Hence $\norm {x - x e} < \epsilon$.
We have therefore shown that for each $\epsilon > 0$ there exists $b \in \EE$ such that whenever $e \in \EE$ satisfies $e \ge_A b$, we have $\norm {x - x e} < \epsilon$.
Hence the net $\family {x e}_{e \in \EE}$ converges to $x$ whenever $x \in I$ is positive.
From Set of Positive Elements of Everywhere Dense Ideal is Dense in Set of Positive Elements of C*-Algebra, the set of $x \in I$ that are positive is dense in the set of positive elements of $A$.
Hence by Approximate Identity for Everywhere Dense Subset is Approximate Identity of C*-Algebra, $\sequence {x e}_{e \in \EE}$ converges to $x$ for each positive $x \in A$. 

Now take $x \in A$ general.
Let $\epsilon > 0$. 
From Hermitian Element of C*-Algebra Decomposes into Positive Elements: Corollary, there exists positive $b_1, b_2, b_3, b_4 \in A$ such that:

$x = b_1 - b_2 + i \paren {b_3 - b_4}$
Hence for $e \in \EE$ we have:

$x e = b_1 e - b_2 e + i \paren {b_3 e - b_4 e}$
From the positive case, we have that $\sequence {b_i e}_{e \mathop \in \EE}$ converges to $b_i$.
Hence by Sum of Convergent Nets in Topological Vector Space is Convergent, we have:

$\sequence {b_1 e - b_2 e + i \paren {b_3 e - b_4 e} }_{e \mathop \in \EE}$ converges to $b_1 - b_2 + i \paren {b_3 - b_4}$.
We have $x = b_1 - b_2 + i \paren {b_3 - b_4}$, so we have shown that $\sequence {x e}_{e \mathop \in \EE}$ converges to $x$ for each $x \in A$.
Hence $\EE$ is an approximate identity of $A$.
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Theorem $4.3$




