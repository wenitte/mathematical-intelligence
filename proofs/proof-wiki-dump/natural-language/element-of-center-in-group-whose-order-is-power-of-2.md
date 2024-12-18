# 

Source: https://proofwiki.org/wiki/Element_of_Center_in_Group_whose_Order_is_Power_of_2

Theorem
Let $n \in \Z$ be an integer such that $n \ge 2$.
Let $G$ be a group whose order is $2^n$.
Let $x \in G$ be of order $2^{n - 1}$ in $G$.

Then $x^{2^{n - 2} }$ is an element of the center of $G$.


Proof
Let $H = \gen x$ be the subgroup of $G$ generated by $x$.
We have that the index of $H$ in $G$ is $2$.
Then by Subgroup of Index 2 is Normal, $H$ is normal in $G$.

Let $y = x^{2^{n - 2} }$.
We have that $y \in H$, by definition of the construction of $H$.
Then the order of $y$ in $G$ is $2$.
As $H$ is normal, we have:

$\forall g \in G: g y g^{-1} \in H$
By Order of Conjugate Element equals Order of Element, $g y g^{-1}$ is also of order $2$.

We can write $g y g^{-1} = x^m$ for some $m \in \Z$.
By Order of Power of Group Element, we have:

$2 = \dfrac {2^{n - 1} } {\gcd \set {m, 2^{n - 1} } }$
This leads to:

$\gcd \set {m, 2^{n - 1} } = 2^{n - 2}$
We have $0 < m < 2^{n - 1}$ and $2^{n - 2} \divides m$.
This forces $m = 2^{n - 2}$ and $g y g^{-1} = y$.
It follows that $g y = y g$.
Hence $y = x^{2^{n - 2} }$ is an element of the center of $G$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $11$




