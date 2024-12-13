# 

Source: https://proofwiki.org/wiki/Second_Isomorphism_Theorem/Groups



Theorem
Let $G$ be a group, and let:

$(1): \quad H$ be a subgroup of $G$
$(2): \quad N$ be a normal subgroup of $G$.

Then:

$\dfrac H {H \cap N} \cong \dfrac {H N} N$
where $\cong$ denotes group isomorphism.


Proof
The fact that $N$ is normal, together with Intersection with Normal Subgroup is Normal, gives us that $N \cap H \lhd H$.
Also, $N \lhd N H = \gen {H, N}$ follows from Subset Product with Normal Subgroup as Generator.

Now we define a mapping $\phi: H \to H N / N$ by the rule:

$\map \phi h = h N$
Note that $N$ need not be a subset of $H$.
Therefore, the coset $h N$ is an element of $H N / N$ rather than of $H / N$.
Then $\phi$ is a homomorphism, as:

$\map \phi {x y} = x y N = \paren {x N} \paren {y N} = \map \phi x \map \phi y$
Then:














\(\ds \map \ker \phi\)

\(=\)







\(\ds \set {h \in H: \map \phi h = e_{H N / N} }\)




















\(\ds \)

\(=\)







\(\ds \set {h \in H: h N = N}\)






A specific link is needed here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.














\(\ds \)

\(=\)







\(\ds \set {h \in H: h \in N}\)




















\(\ds \)

\(=\)







\(\ds H \cap N\)










Then we see that $\phi$ is a surjection because $h n N = h N \in H N / N$ is $\map \phi h$.
The result follows from the First Isomorphism Theorem.
$\blacksquare$


Also known as
This result is also referred to by some sources as the first isomorphism theorem.


Also see
Isomorphism Theorems


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.16$
1967: John D. Dixon: Problems in Group Theory ... (previous) ... (next): $1$: Subgroups: $1.\text{T}.5$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{HH}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 69$. The Second Isomorphism Theorem
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Theorem $8.15$




