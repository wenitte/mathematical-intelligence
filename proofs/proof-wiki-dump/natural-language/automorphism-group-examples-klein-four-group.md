# 

Source: https://proofwiki.org/wiki/Automorphism_Group/Examples/Klein_Four-Group

Example of Automorphism Group
The automorphism group of the Klein $4$-group is the Symmetric Group on 3 Letters $S_3$.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $f:V\rightarrow V$ be a permutation that fixes the identity element.
By definition, this map is bijective.
$V$ has the property that the product of any 2 distinct non-identity elements is the 3rd non-identity element.
This implies:

$\map f {vv'} = \map f v \cdot \map f {v'}$
for all $v, v' \in V$ with $v, v' \ne e$.
For products involving the identity element:

$\map f {e v} = \map f e \cdot \map f v = e \cdot \map f v = \map f v$
for all $v \in V$.
Also, since all non-identity elements of $V$ have order $2$:

$\map f {v^2} = \map f {v v} = \map f v \cdot \map f v = e$
for all $v \in V$.
Hence, any permutation of the elements of $V$ that fixes the identity element is an automorphism of $V$.
Since these permutations exhaust all possible automorphisms of $V$, they are the elements of $\Aut V$.
Since the $3! = 6$ elements of $\Aut V$ represent all permutations of $3$ objects, $\Aut V$ is isomorphic to $S_3$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64 \zeta$
jobrien929 (https://math.stackexchange.com/users/22776/jobrien929), $\Aut V$ is isomorphic to $S_3$, URL (version: 2012-01-12): https://math.stackexchange.com/q/98525




