# 

Source: https://proofwiki.org/wiki/Power_of_Power_of_Positive_Element_of_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a  $\text C^\ast$-algebra.
Let $a \in A$ be positive elements.
Let $\alpha, \beta > 0$ be real numbers.
Let $a^{\alpha \beta}$ be given by the continuous functional calculus for $a$.
Let $\paren {a^\alpha}^\beta$ be given by the continuous functional calculus for $a^\alpha$.

Then:

$\paren {a^\alpha}^\beta = a^{\alpha \beta}$


Proof
First take $A$ unital.
Let $\map {\sigma_A} a$ be the spectrum of $a$ in $A$.
Let $\map {\sigma_A} {a^\alpha}$ be the spectrum of $a^\alpha$ in $A$.
From Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative, $a^\alpha$ is positive.
Let $\Theta_{a^\alpha}$ be the continuous functional calculus for $a^\alpha$.
Let $\Theta_a$ be the continuous functional calculus for $a$.
Define $e_{\alpha \beta} : \map {\sigma_A} a \to \hointr 0 \infty$ and $e_\alpha : \map {\sigma_A} \to \hointr 0 \infty$ by:

$\map {e_{\alpha \beta} } t = t^{\alpha \beta}$
and:

$\map {e_\alpha} t = t^\alpha$
for each $t \in \map {\sigma_A} a$. 
Define $e_\beta : \map {\sigma_A} {a^\alpha} \to \hointr 0 \infty$ by:

$\map {e_\beta} t = t^\beta$
for each $t \in \map {\sigma_A} {a^\alpha}$.
From the Spectral Mapping Theorem, we have:

$\map {\sigma_A} {a^\alpha} = \set {t^\alpha : t \in \map {\sigma_A} a}$
Hence we have $e_{\alpha \beta} = e_\beta \circ e_\alpha$ by Power of Power.
So:














\(\ds a^{\alpha \beta}\)

\(=\)







\(\ds \map {\Theta_a} {e_{\alpha \beta} }\)





Definition of Continuous Functional Calculus














\(\ds \)

\(=\)







\(\ds \map {\Theta_{\map {e_\alpha} a} } {e_\beta}\)





Continuous Functional Calculus obeys Composition














\(\ds \)

\(=\)







\(\ds \map {\Theta_{a^\alpha} } {e_\beta}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^\alpha}^\beta\)










Now take $A$ to not be unital.
Let $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ be the unitization of $A$.
From the definition of the continuous functional for non-unital $\text C^\ast$-algebras, we have:














\(\ds \tuple {a^{\alpha \beta}, 0}\)

\(=\)







\(\ds \tuple {a, 0}^{\alpha \beta}\)




















\(\ds \)

\(=\)







\(\ds \paren {\tuple {a, 0}^\alpha}^\beta\)





from the unital case














\(\ds \)

\(=\)







\(\ds \paren {\tuple {a^\alpha, 0} }^\beta\)





Definition of Continuous Functional Calculus














\(\ds \)

\(=\)







\(\ds \tuple {\paren {a^\alpha}^\beta, 0}\)





Definition of Continuous Functional Calculus



Hence:

$a^{\alpha \beta} = \paren {a^\alpha}^\beta$
in this case also.
$\blacksquare$





