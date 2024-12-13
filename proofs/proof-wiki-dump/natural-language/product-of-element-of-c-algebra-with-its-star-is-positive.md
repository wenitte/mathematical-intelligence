# 

Source: https://proofwiki.org/wiki/Product_of_Element_of_C*-Algebra_with_its_Star_is_Positive

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra. 
Let $a \in A$.

Then $a^\ast a$ is positive.


Proof
We first show that if $-a^\ast a$ is positive then $a = {\mathbf 0}_A$. 
From Product of Element in *-Star Algebra with its Star is Hermitian, $a^\ast a$ and $a a^\ast$ are Hermitian. 
Suppose that $-a^\ast a$ is positive.
From Spectrum of Product of Elements of Banach Algebra, we have:

$\map {\sigma_A} {-a^\ast a} \setminus \set 0 = \map {\sigma_A} {-a a^\ast} \setminus \set 0$
where $\sigma_A$ is the spectrum in $A$.
We have $\map {\sigma_A} {-a^\ast a} \subseteq \hointr 0 \infty$ by the assumption that $-a^\ast a$ is positive.
Hence $\map {\sigma_A} {-a a^\ast} \setminus \set 0 = \map {\sigma_A} {-a^\ast a} \setminus \set 0 \subseteq \openint 0 \infty$.
So $\map {\sigma_A} {-a a^\ast} \subseteq \hointr 0 \infty$.
So $-a a^\ast$ is also positive.
From Element of *-Algebra Uniquely Decomposes into Hermitian Elements, there exists Hermitian elements $b, c \in A$ such that:

$a = b + i c$
Then we have:














\(\ds a^\ast a + a a^\ast\)

\(=\)







\(\ds \paren {b + i c}^\ast \paren {b + i c} + \paren {b + i c} \paren {b + i c}^\ast\)




















\(\ds \)

\(=\)







\(\ds \paren {b - i c} \paren {b + i c} + \paren {b + i c} \paren {b - i c}\)





Definition of Involution on Algebra














\(\ds \)

\(=\)







\(\ds \paren {b^2 + c^2} + \paren {b^2 + c^2}\)




















\(\ds \)

\(=\)







\(\ds 2 b^2 + 2 c^2\)









From Spectrum of Hermitian Element in Unital C*-Algebra is Real we have $\map {\sigma_A} b \subseteq \R$ and $\map {\sigma_A} c \subseteq \R$. 
We have $x^2 \in \R_{\ge 0}$ for $x \in \R$, hence from Spectral Mapping Theorem for Polynomials we have $\map {\sigma_A} {b^2} \subseteq \hointr 0 \infty$ and $\map {\sigma_A} {c^2} \subseteq \hointr 0 \infty$.
Further from Star of Product of Elements in *-Algebra, $b^2$ and $c^2$ are Hermitian.
So $b^2$ and $c^2$ are both positive.
From Non-Negative Multiple of Positive Element of C*-Algebra is Positive and Sum of Two Positive Elements of C*-Algebra is Positive, we have that $2 b^2 + 2 c^2$ is positive.
That is, $a^\ast a + a a^\ast$ is positive.
Since $-a a^\ast$ is positive, we have that $a^\ast a = a^\ast a + a a^\ast + \paren {-a a^\ast}$ is positive from Sum of Two Positive Elements of C*-Algebra is Positive.
Hence $\map {\sigma_A} {a^\ast a} \subseteq \hointr 0 \infty$.
We also have $\map {\sigma_A} {-a^\ast a} \subseteq \hointr 0 \infty$.
Hence by the Spectral Mapping Theorem for Polynomials, we have $\map {\sigma_A} {a^\ast a} \subseteq \hointl {-\infty} 0$.
We therefore have:

$\map {\sigma_A} {a^\ast a} \subseteq \hointl {-\infty} 0 \cap \hointr 0 \infty = \set 0$
Since $\map {\sigma_A} {a^\ast a} \ne \O$ from Spectrum of Element of Banach Algebra is Non-Empty, we have $\map {\sigma_A} {a^\ast a} = \set 0$. 
From Spectral Radius of Normal Element of $\text C*$-Algebra Equal to Norm: Corollary, we have $a^\ast a = {\mathbf 0}_A$.
Now from the $\text C^\ast$-identity, we have:

$\norm a^2 = \norm {a^\ast a} = 0$
From Norm Axiom $\text N 1$: Positive Definiteness, we have $a = {\mathbf 0}_A$.

Now suppose that $a$ is arbitrary. 
Again, $b = a^\ast a$ is Hermitian.
From Hermitian Element of C*-Algebra Decomposes into Positive Elements, there exists positive elements $b^+$ and $b^-$ such that $b = b^+ - b^-$ and $b^+ b^- = {\mathbf 0}_A$.
Set $c = a b^-$. 
We then have:














\(\ds -c^\ast c\)

\(=\)







\(\ds -b^- \paren {a^\ast a} b^-\)




















\(\ds \)

\(=\)







\(\ds -b^- \paren {b^+ - b^-} b^-\)




















\(\ds \)

\(=\)







\(\ds -b^- b^+ + \paren {b^-}^3\)




















\(\ds \)

\(=\)







\(\ds \paren {b^-}^3\)









Applying the Spectral Mapping Theorem for Polynomials again, we have $\map {\sigma_B} {\paren {b^-}^3} \subseteq \hointr 0 \infty$.
Hence $-c^\ast c$ is positive.
By what we have already shown, we therefore have $c = {\mathbf 0}_A$.
Hence $\paren {b^-}^3 = {\mathbf 0}_A$.
By the Spectral Mapping Theorem for Polynomials, we have:

$\map {\sigma_A} {\paren {b^-}^3} = \set {z^3 : z \in \map {\sigma_A} {b^-} } = \set 0$
Hence $\map {\sigma_A} {b^-} = \set 0$.
Hence from Spectral Radius of Normal Element of C*-Algebra Equal to Norm: Corollary, we have $b^- = {\mathbf 0}_A$.
Hence $a^\ast a = b = b^+$, which is positive.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.2$: Positive Elements of $C^\ast$-Algebras




