# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Distributive_Operations/Existence_and_Uniqueness



Theorem
Let $\struct {R, *}$ be a commutative semigroup, all of whose elements are cancellable.
Let $\struct {T, *}$ be an inverse completion of $\struct {R, *}$.
Let $\circ$ be an operation on $R$ which distributes over $*$.

Then:

There exists a unique operation $\circ'$ on $T$ which distributes over $*$ in $T$ and induces on $R$ the operation $\circ$.


Proof
We have by hypothesis that all the elements of $\struct {R, *}$ are cancellable.
Thus Inverse Completion of Commutative Semigroup is Abelian Group can be applied.
So $\struct {T, *}$ is an abelian group.


Existence
For each $m \in R$, we define $\lambda_m: R \to T$ as:

$\forall x \in R: \map {\lambda_m} x = m \circ x$
Then:














\(\ds \map {\lambda_m} {x * y}\)

\(=\)







\(\ds m \circ \paren {x * y}\)




















\(\ds \)

\(=\)







\(\ds \paren {m \circ x} * \paren {m \circ y}\)





as $\circ$ distributes over $*$














\(\ds \)

\(=\)







\(\ds \map {\lambda_m} x * \map {\lambda_m} y\)









So $\lambda_m$ is a homomorphism from $\struct {R, *}$ into $\struct {T, *}$.

Now, by the Extension Theorem for Homomorphisms, every homomorphism from $\struct {R, *}$ into $\struct {T, *}$ is the restriction to $R$ of a unique endomorphism of $\struct {T, *}$.
This can be applied because $\struct {T, *}$ is abelian.
We have just shown that $\lambda_m$ is such a homomorphism.
Therefore there exists a unique endomorphism $\lambda'_m: T \to T$ which extends $\lambda_m$.

Now:










\(\ds \forall m, n, z \in R: \, \)



\(\ds \map {\lambda_{m * n} } z\)

\(=\)







\(\ds \paren {m * n} \circ z\)





Definition of $\lambda$














\(\ds \)

\(=\)







\(\ds \paren {m \circ z} * \paren {n \circ z}\)





Distributivity of $\circ$ over $*$














\(\ds \)

\(=\)







\(\ds \map {\lambda_m} z * \map {\lambda_n} z\)





Definition of $\lambda$














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda_m * \lambda_n} } z\)





Here $*$ is the operation induced on $T^T$ by $*$




By Homomorphism on Induced Structure to Commutative Semigroup:

$\lambda'_m * \lambda'_n$ is an endomorphism of $\struct {T, *}$ that, as we have just seen, coincides on $R$ with $\lambda'_{m * n}$.
Hence $\lambda'_{m * n} = \lambda'_m * \lambda'_n$.

Similarly, for each $z \in T$, we define $\rho_z: R \to T$ as:

$\forall m \in R: \map {\rho_z} m = \map {\lambda'_m} z$

Then:














\(\ds \map {\rho_z} {m * n}\)

\(=\)







\(\ds \map {\lambda'_{m * n} } z\)





Definition of $\rho_z$














\(\ds \)

\(=\)







\(\ds \map {\lambda'_m} z * \map {\lambda'_n} z\)





Behaviour of $\lambda'_{m * n}$














\(\ds \)

\(=\)







\(\ds \map {\rho_z} m * \map {\rho_z} n\)





Definition of $\rho_z$




Therefore $\rho_z$ is a homomorphism from $\struct {R, *}$ into $\struct {T, *}$.
Consequently there exists a unique endomorphism $\rho'_z: T \to T$ extending $\rho_z$.











\(\ds \forall y, z \in T, m \in R: \, \)



\(\ds \map {\rho_{y * z} } m\)

\(=\)







\(\ds \map {\lambda'_m} {y * z}\)





Definition of $\rho_{y * z}$














\(\ds \)

\(=\)







\(\ds \map {\lambda'_m} y * \map {\lambda'_m} z\)





$\lambda'_m$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \map {\paren {\rho_y * \rho_z} } m\)





Definition of $\rho_y$ and $\rho_z$




By Homomorphism on Induced Structure to Commutative Semigroup:

$\rho'_y * \rho'_z$ is an endomorphism on $\struct {T, *}$ that coincides (as we have just seen) with $\rho'_{y * z}$ on $R$.
Hence $\rho'_{y * z} = \rho'_y * \rho'_z$.

Now we define an operation $\circ'$ on $T$ by:

$\forall x, y \in T: x \circ' y = \map {\rho'_y} x$
Now suppose $x, y \in R$. Then:














\(\ds x \circ' y\)

\(=\)







\(\ds \map {\rho_y} x\)





as $\rho'_y = \rho_y$ on $R$














\(\ds \)

\(=\)







\(\ds \map {\lambda_x} y\)





Definition of $\rho_x$














\(\ds \)

\(=\)







\(\ds x \circ y\)





Definition of $\lambda_x$




so $\circ'$ is an extension of $\circ$.

Next, let $x, y, z \in T$. Then:














\(\ds \paren {x * y} \circ' z\)

\(=\)







\(\ds \map {\rho'_z} {x * y}\)




















\(\ds \)

\(=\)







\(\ds \map {\rho'_z} x * \map {\rho'_z} y\)




















\(\ds \)

\(=\)







\(\ds x \circ' z * y \circ' z\)
























\(\ds x \circ' \paren {y * z}\)

\(=\)







\(\ds \map {\rho'_{y * z} } x\)




















\(\ds \)

\(=\)







\(\ds \map {\rho'_y} x * \map {\rho'_z} x\)




















\(\ds \)

\(=\)







\(\ds x \circ' y * x \circ' z\)










So $\circ'$ is distributive over $*$.
$\blacksquare$


Uniqueness
To show that $\circ'$ is unique, let $\circ_1$ be any operation on $T$ distributive over $*$ that induces $\circ$ on $R$.
Since $\circ'$ and $\circ_1$ both distribute over $*$, for every $m \in R$, the mappings:














\(\ds y \mapsto m \circ_1 y\)

\(,\)







\(\ds y \in T\)




















\(\ds y \mapsto m \circ' y\)

\(,\)







\(\ds y \in T\)









are endomorphisms of $\struct {T, *}$ that coincide on $R$, so must be the same mapping.
Therefore:

$\forall m \in R, y \in T: m \circ_1 y = m \circ' y$

Similarly, for every $y \in T$, the mappings:














\(\ds x \mapsto x \circ_1 y\)

\(,\)







\(\ds x \in T\)




















\(\ds x \mapsto x \circ' y\)

\(,\)







\(\ds x \in T\)









are endomorphisms of $\struct {T, *}$ that coincide on $R$ by what we have just proved.
So these two mappings must be the same mapping.

Hence:

$\forall x, y \in T: x \circ_1 y = x \circ' y$

Thus $\circ'$ is the only operation on $T$ which extends $\circ$ and distributes over $*$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.8$




