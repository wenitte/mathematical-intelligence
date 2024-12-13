# 

Source: https://proofwiki.org/wiki/Left_Regular_Representation_is_Transitive_Group_Action



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $*: G \times G \to G$ be the group action:

$\forall g, h \in G: g * h = \map {\lambda_g} h$
where $\lambda_g$ is the left regular representation of $G$ with respect to $g$.

Then $*$ is a transitive group action.


Proof
Let $g, h \in G$.
Then:










\(\ds \exists a \in G: \, \)



\(\ds h\)

\(=\)







\(\ds g \circ a\)





Group has Latin Square Property








\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds \map {\lambda_g} a\)





Definition of Left Regular Representation








\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds g * a\)





Definition of $*$



$h$ is arbitrary, therefore the above holds for all $h \in G$.
By definition of orbit:

$\Orb h = \set {t \in G: \exists g \in G: g * h = t}$
That is:

$\Orb h = G$
Hence the result by definition of transitive group action.
$\blacksquare$


Also see
Right Regular Representation by Inverse is Transitive Group Action


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(iv)}$




