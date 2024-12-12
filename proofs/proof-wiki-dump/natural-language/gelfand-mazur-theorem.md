# 

Source: https://proofwiki.org/wiki/Gelfand-Mazur_Theorem

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital normed algebra over $\C$ where:

$\map G A = A \setminus \set { {\mathbf 0}_A}$
where $\map G A$ is the group of units of $A$.
Then $A$ is isometrically algebra isomorphic to $\C$. 


Proof
Define $\theta : \C \to A$ by: 

$\map \theta \lambda = \lambda {\mathbf 1}_A$
for each $\lambda \in \C$.
For $z, w, \lambda \in \C$ we have:














\(\ds \map \theta {z + \lambda w}\)

\(=\)







\(\ds \paren {z + \lambda w} {\mathbf 1}_A\)




















\(\ds \)

\(=\)







\(\ds z {\mathbf 1}_A + \lambda \paren {w {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \map \theta z + \lambda \map \theta w\)









so $\theta$ is linear. 
Further, for $\lambda, \mu \in \C$ we have:

$\map \theta {\lambda \mu} = \paren {\lambda \mu} {\mathbf 1}_A = \paren {\lambda {\mathbf 1}_A} \paren {\mu {\mathbf 1}_A} = \map \theta \lambda \map \theta \lambda$
Hence $\theta$ is an algebra homomorphism.
For $\lambda \in \C$, we have: 














\(\ds \norm {\map \theta \lambda}\)

\(=\)







\(\ds \norm {\lambda {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \cmod \lambda \norm { {\mathbf 1}_A}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \cmod \lambda\)





Definition of Unital Normed Algebra



Hence $\theta$ is a isometry.
It remains to show that $\theta$ is surjective.
Let $x \in A$. 
From Spectrum of Element of Banach Algebra is Non-Empty: Corollary, we have $\map {\sigma_A} x \ne \O$ where $\map {\sigma_A} x$ is the spectrum of $x$ in $A$. 
Let $\lambda \in \map {\sigma_A} x$. 
Then $\lambda {\mathbf 1}_A - x \in A \setminus \map G A = \set { {\mathbf 0}_A}$. 
Hence we have $x = \lambda {\mathbf 1}_A = \map \theta \lambda$. 
That is, $x \in \Img \theta$. 
So $\theta$ is surjective.
So $\theta$ is an isometric isomorphism onto $\C$.
Hence $A$ is isometrically isomorphic to $\C$.
$\blacksquare$


Source of Name
This entry was named for Stanisław Mieczysław Mazur and Israel Moiseevich Gelfand.





