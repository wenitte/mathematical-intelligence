# 

Source: https://proofwiki.org/wiki/List_of_Elements_in_Finite_Cyclic_Group

Theorem
Let $G$ be a group whose identity is $e$.
Let $a \in G$ have finite order $\order a = k$.
Let $\gen a$ be the cyclic subgroup generated by $a$.

Then:

$\set {a^0, a^1, a^2, \ldots, a^{k - 1} }$ is a complete repetition-free list of the elements of $\gen a$
That is, let $\closedint 0 {k - 1}$ be the integer interval from $0$ to $k - 1$.
Then the mapping:

$\closedint 0 {k - 1} \to \gen a$:
$n \mapsto g^n$
is a bijection.


Proof
By Element to Power of Remainder, every power of $a$ is equal to one appearing in the list $a^0, a^1, a^2, \ldots, a^{k - 1}$.
This list has to be repetition free, otherwise it would contain $a^m = a^n$ with $0 \le m < n < k$ which contradicts the hypothesis.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.4$. Cyclic groups: $(2)$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Theorem $3 \ (3)$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 38.4$ Period of an element: $\text{(iii)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.4$: Cyclic groups
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): generator: 2. (of a group)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): generator: 2. (of a group)




