# 

Source: https://proofwiki.org/wiki/Complex_Numbers_form_Subfield_of_Quaternions



Theorem
The field of complex numbers $\left({\C, +, \times}\right)$ is isomorphic to the subfields of the quaternions $\left({\mathbb H, +, \times}\right)$ whose underlying subsets are:

$(1): \quad \mathbb H_\mathbf i = \left\{{a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k \in \mathbb H: c = d = 0}\right\}$
$(2): \quad \mathbb H_\mathbf j = \left\{{a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k \in \mathbb H: b = d = 0}\right\}$
$(3): \quad \mathbb H_\mathbf k = \left\{{a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k \in \mathbb H: b = c = 0}\right\}$
That is:

$(1): \quad \mathbb H_\mathbf i = \left\{{a \mathbf 1 + b \mathbf i \in \mathbb H}\right\}$
$(2): \quad \mathbb H_\mathbf j = \left\{{a \mathbf 1 + c \mathbf j \in \mathbb H}\right\}$
$(3): \quad \mathbb H_\mathbf k = \left\{{a \mathbf 1 + d \mathbf k \in \mathbb H}\right\}$


Proof
Let $\phi_i: \mathbb H_\mathbf i \to \C$  be defined as:

$\forall \mathbf x = \mathbf a \mathbf 1 + b \mathbf i \in \mathbb H_\mathbf i: \phi_i \left({\mathbf x}\right) = a + b i$
where in this context $i$ is the imaginary unit.
Similarly we can define $\phi_j$ and $\phi_k$:

$\forall \mathbf x = \mathbf a \mathbf 1 + c \mathbf j \in \mathbb H_\mathbf j: \phi_j \left({\mathbf x}\right) = a + c i$
$\forall \mathbf x = \mathbf a \mathbf 1 + d \mathbf k \in \mathbb H_\mathbf k: \phi_k \left({\mathbf x}\right) = a + d i$


Proof of Bijectivity
First note that each of $\phi_i, \phi_j, \phi_k$ are bijections, as follows:

Injections:
Let $\mathbf x_1 = \mathbf a_1 \mathbf 1 + b_1 \mathbf i, \mathbf x_2 = \mathbf a_2 \mathbf 1 + b_2 \mathbf i$. Then:

$\phi_i \left({x_1}\right) = \phi_i \left({x_2}\right) \implies a_1 + b_1 i = a_2 + b_2 i \implies a_1 = a_2, b_1 = b_2 \implies \mathbf x_1 = \mathbf x_2$
and similarly with $\phi_j$ and $\phi_k$.

Surjections:
Let $x = a + b i \in \C$.
Then:

$\exists \mathbf x = \mathbf a \mathbf 1 + b \mathbf i \in \mathbb H_\mathbf i: \phi_i \left({\mathbf x}\right) = x$
and similarly with $\phi_j$ and $\phi_k$.
Thus it is established that $\phi_i, \phi_j, \phi_k$ are bijections.
$\Box$


Proof of Morphism Property
Let $\mathbf x_1 = \mathbf a_1 \mathbf 1 + b_1 \mathbf i, \mathbf x_2 = \mathbf a_2 \mathbf 1 + b_2 \mathbf i$.

First we show that $+$ has the morphism property under $\phi_i$:














\(\ds \phi_i \left({x_1}\right) + \phi_i \left({x_2}\right)\)

\(=\)







\(\ds \phi_i \left({a_1 \mathbf 1 + b_1 \mathbf i}\right) + \phi_i \left({a_2 \mathbf 1 + b_2 \mathbf i}\right)\)




















\(\ds \)

\(=\)







\(\ds \left({a_1 + b_1 i}\right) + \left({a_2 + b_2 i}\right)\)




















\(\ds \)

\(=\)







\(\ds \left({a_1 + a_2}\right) + \left({b_1 + b_2}\right) i\)




















\(\ds \)

\(=\)







\(\ds \phi_i \left({x_1 + x_2}\right)\)









and similarly for $\phi_j$ and $\phi_k$.

Next we show that $\times$ has the morphism property under $\phi_i$:














\(\ds \phi_i \left({x_1 \times x_2}\right)\)

\(=\)







\(\ds \phi_i \left({a_1 a_2 - b_1 b_2 \mathbf i}\right) + \phi_i \left({a_1 b_2 + b_1 a_2 \mathbf i}\right)\)





by quaternion multiplication - most terms are zero














\(\ds \)

\(=\)







\(\ds \left({a_1 a_2 - b_1 b_2}\right) + \left({a_1 b_2 + b_1 a_2}\right) i\)




















\(\ds \)

\(=\)







\(\ds \left({a_1 + b_1 i}\right) \times \left({a_2 + b_2 i}\right)\)





by complex multiplication














\(\ds \)

\(=\)







\(\ds \phi_i \left({x_1}\right) \times \phi_i \left({x_2}\right)\)









Similarly for  $\phi_j$ and $\phi_k$.

So we have shown that $\phi_i, \phi_j, \phi_k$ are ring homomorphisms.
$\Box$

So all of these mappings are bijective homomorphisms, that is, isomorphisms.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms




