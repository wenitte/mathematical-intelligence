# 

Source: https://proofwiki.org/wiki/Gelfand-Naimark_Theorem/Commutative_Case/Unital

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a commutative unital $\text C^\ast$-algebra.
Let $\Phi_A$ be the spectrum of $A$.
Let $\struct {\map \CC {\Phi_A}, \overline \cdot, \norm {\, \cdot \,} }$ be the $\text C^\ast$-algebra of continuous complex-valued functions vanishing at infinity.
Define $G : A \to \map \CC {\Phi_A}$ by:

$\map G a = \hat a$
where $\hat a$ is the Gelfand transform of $a$.

Then $G$ is a isometric unital $\ast$-algebra isomorphism.
That is, the commutative unital  $\text C^\ast$-algebras are precisely $\struct {\map \CC K, \overline \cdot, \norm {\, \cdot \,} }$ for compact Hausdorff spaces $K$, up to isometric $\ast$-algebra isomorphism. 


Proof
From Complex-Valued Function on Compact Hausdorff Space Vanishes at Infinity, we have:

$\map {\CC_0} K = \map \CC K$
for every compact Hausdorff space $K$.
Hence from Space of Continuous Functions Vanishing at Infinity is C*-Algebra, $\struct {\map \CC K, \overline \cdot, \norm {\, \cdot \,} }$ is indeed a $\text C^\ast$-algebra for each compact Hausdorff space $K$.
Finally, recall that $\Phi_A$ is a compact Hausdorff space from Spectrum of Banach Algebra is Weak-$\ast$ Locally Compact Hausdorff Space: Corollary.

Now from Gelfand-Naimark Theorem: Commutative Case, $G$ is a isometric $\ast$-algebra isomorphism.
Further, defining $\mathbf 1_{\map \CC K} : K \to \C$ by:

$\map {\mathbf 1_{\map \CC K} } x = 1$
for each $x \in K$, we have:

$\mathbf 1_{\map \CC K} \in \map \CC K$
and:

$f \mathbf 1_{\map \CC K} = \mathbf 1_{\map \CC K} f = f$
for each $f \in \map \CC K$.
So $\struct {\map \CC K, \overline \cdot, \norm {\, \cdot \,} }$ is unital.
We now have:














\(\ds \map G { {\mathbf 1}_A}\)

\(=\)







\(\ds \map {\hat { {\mathbf 1}_A} } \phi\)




















\(\ds \)

\(=\)







\(\ds \map \phi { {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds 1\)





Character on Unital Banach Algebra is Unital Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \map {\mathbf 1_{\map \CC {\Phi_A} } } \phi\)









for each $\phi \in \Phi_A$.
So $G$ is a isometric unital $\ast$-algebra isomorphism.
Hence every commutative unital $\text C^\ast$-algebra $A$ is isometrically $\ast$-algebra isomorphic to $\struct {\map \CC K, \overline \cdot, \norm {\, \cdot \,} }$ for some compact Hausdorff space $K$: in particular $K = \Phi_A$. 
Conversely, we have established that $\struct {\map \CC K, \overline \cdot, \norm {\, \cdot \,} }$ is a unital $\text C^\ast$-algebra for each compact Hausdorff space $K$.
$\blacksquare$





