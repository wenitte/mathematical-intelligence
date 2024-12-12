# 

Source: https://proofwiki.org/wiki/Gelfand%27s_Spectral_Radius_Formula/Banach_Algebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$. 
Let $x \in A$.
Let $\map {r_A} x$ be the spectral radius of $x$ in $A$.

Then, we have:

$\ds \map {r_A} x = \inf_{n \mathop \in \N_{> 0} } \norm {x^n}^{1/n} = \lim_{n \mathop \to \infty} \norm {x^n}^{1/n}$


Proof
First suppose that $A$ is unital.
Let $\map {\sigma_A} x$ be the spectrum of $x$ in $A$. 
Let $\map {\rho_A} x$ be the resolvent set of $x$ in $A$.
Let $\lambda \in \map {\sigma_A} x$. 
Let $n \in \N_{> 0}$. 
From Spectral Mapping Theorem for Polynomials, we have $\lambda^n \in \map {\sigma_A} {x^n}$.
From Spectrum of Element of Banach Algebra is Bounded, we then have $\cmod \lambda^n \le \norm {x^n}$.
So, we have $\cmod \lambda \le \norm {x^n}^{1/n}$ for each $\lambda \in \map {\sigma_A} x$.
Taking the supremum over $\lambda \in \map {\sigma_A} x$, we have:

$\map {r_A} x \le \norm {x^n}^{1/n}$ for each $n \in \N_{> 0}$.
Taking the infimum over $n \in \N_{> 0}$, we have:

$\ds \map {r_A} x \le \inf_{n \mathop \in \N_{> 0} } \norm {x^n}^{1/n}$

Let $\phi \in A^\ast$. 
Define $g : \map {\rho_A} x \to \C$ by:

$\map g \lambda = \map \phi {\paren {\lambda {\mathbf 1}_A - x}^{-1} }$
for each $\lambda \in \map {\rho_A} x$. 
Let $\lambda \in \C$ be such that $\cmod \lambda > \norm x$.
From Spectrum of Element of Banach Algebra is Bounded, we have:

$\map {\sigma_A} x \subseteq \set {\lambda \in \C : \cmod \lambda \le \norm x}$
Hence from Set Complement inverts Subsets:

$\set {\lambda \in \C : \cmod \lambda > \norm x} \subseteq \map {\rho_A} x$
So $\lambda$ is in the domain of $g$. 
Then, we have:

$\ds \map g \lambda = \frac 1 \lambda \map \phi {\paren { {\mathbf 1}_A - \frac x \lambda} }^{-1}$
As shown in Element of Unital Banach Algebra Close to Identity is Invertible, we have:

$\ds \paren { {\mathbf 1}_A - \frac x \lambda}^{-1} = \sum_{n \mathop = 0}^\infty \paren {\frac x \lambda}^n$
Then, we have:














\(\ds \map g \lambda\)

\(=\)







\(\ds \frac 1 \lambda \map \phi {\sum_{n \mathop = 0}^\infty \paren {\frac x \lambda}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \lambda \map \phi {\lim_{N \mathop \to \infty} \sum_{n \mathop = 0}^N \paren {\frac x \lambda}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \lambda \lim_{N \mathop \to \infty} \map \phi {\sum_{n \mathop = 0}^N \paren {\frac x \lambda}^n}\)





$\phi$ is continuous














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda \lim_{N \mathop \to \infty} \sum_{n \mathop = 0}^N \map \phi {\paren {\frac x \lambda}^n}\)





$\phi$ is linear














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda \sum_{n \mathop = 0}^\infty \map \phi {\paren {\frac x \lambda}^n}\)









This gives a Laurent series expansion for $g$ in $\set {\lambda \in \C : \cmod \lambda > \norm x}$.
By the definition of the spectral radius, we have:

$\set {\lambda \in \C : \cmod \lambda > \map {r_A} x} \subseteq \map {\rho_A} x$
From Uniqueness of Laurent Series, the Laurent series expansion we have determined for $g$ also holds on $\set {\lambda \in \C : \cmod \lambda > \map {r_A} x}$.
That is:

$\ds \map g \lambda = \frac 1 \lambda \sum_{n \mathop = 0}^\infty \map \phi {\paren {\frac x \lambda}^n}$
for $\cmod \lambda > \map {r_A} x$.
From Terms in Convergent Series Converge to Zero, we have:

$\ds \map \phi {\paren {\frac x \lambda}^n} \to 0$ for $\phi \in A^\ast$ and $\cmod \lambda > \map {r_A} x$.
Hence:

$\ds \frac {x^n} {\lambda^n} \weakconv 0$ for $\cmod \lambda > \map {r_A} x$.
From Weakly Convergent Sequence in Normed Vector Space is Bounded: 

for each $\cmod \lambda > \map {r_A} x$ there exists $M_\lambda \in \openint 0 \infty$ such that:
$\ds \norm {\frac {x^n} {\lambda^n} } \le M_\lambda$ for each $n \in \N_{> 0}$.
From Norm Axiom $\text N 2$: Positive Homogeneity, we have:

$\norm {x^n} \le M_\lambda \size \lambda^n$
That is:

$\norm {x^n}^{1/n} \le M_\lambda^{1/n} \size \lambda$
for each $\cmod \lambda > \map {r_A} x$. 
So, we have:

$\ds \limsup_{n \mathop \to \infty} \norm {x^n}^{1/n} \le \size \lambda$
Taking $\size \lambda \to \map {r_A} x$, we obtain:

$\ds \limsup_{n \mathop \to \infty} \norm {x^n}^{1/n} \le \map {r_A} x$
We now have: 














\(\ds \map {r_A} x\)

\(\le\)







\(\ds \inf_{n \mathop \in \N_{> 0} } \norm {x^n}^{1/n}\)




















\(\ds \)

\(\le\)







\(\ds \liminf_{n \mathop \to \infty} \norm {x^n}^{1/n}\)




















\(\ds \)

\(\le\)







\(\ds \limsup_{n \mathop \to \infty} \norm {x^n}^{1/n}\)




















\(\ds \)

\(\le\)







\(\ds \map {r_A} x\)









Then, we have:

$\ds \map {r_A} x = \inf_{n \mathop \in \N_{> 0} } \norm {x^n}^{1/n} = \limsup_{n \mathop \to \infty} \norm {x^n}^{1/n} = \inf_{n \mathop \to \infty} \norm {x^n}^{1/n}$
From Convergence of Limsup and Liminf:

$\ds \lim_{n \mathop \to \infty} \norm {x^n}^{1/n}$ exists and:
$\ds \map {r_A} x = \inf_{n \mathop \in \N} \norm {x^n}^{1/n} = \lim_{n \mathop \to \infty} \norm {x^n}^{1/n}$

Now, suppose that $\struct {A, \norm {\, \cdot \,} }$ is not unital.
Let $\struct {A_+, \norm {\, \cdot \,}_{A_+} }$ be the normed unitization of $\struct {A, \norm {\, \cdot \,} }$.
We have:














\(\ds \map {r_A} x\)

\(=\)







\(\ds \sup_{\lambda \in \map {\sigma_A} x} \cmod \lambda\)





Definition of Spectral Radius in Banach Algebra














\(\ds \)

\(=\)







\(\ds \sup_{\lambda \in \map {\sigma_{A_+} } {\tuple {x, 0} } } \cmod \lambda\)





Definition of Spectrum in Non-Unital Algebra














\(\ds \)

\(=\)







\(\ds \map {r_{A_+} } {\tuple {x, 0} }\)





Definition of Spectral Radius in Banach Algebra



Applying the formula for unital Banach algebras, we obtain:

$\ds \map {r_{A_+} } {\tuple {x, 0} } = \inf_{n \mathop \in \N_{> 0} } \norm {\tuple {x, 0}^n}_{A_+}^{1/n} = \lim_{n \mathop \to \infty} \norm {\tuple {x, 0}^n}_{A_+}^{1/n}$
We have:

$\norm {\tuple {x, 0}^n}_{A_+} = \norm {\tuple {x^n, 0} }_{A_+} = \norm {x^n}$
So, we have:

$\ds \map {r_A} x = \map {r_{A_+} } {\tuple {x, 0} } = \inf_{n \mathop \in \N_{> 0} } \norm {x^n}^{1/n} = \lim_{n \mathop \to \infty} \norm {x^n}^{1/n}$
$\blacksquare$





