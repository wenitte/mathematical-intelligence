# 

Source: https://proofwiki.org/wiki/Fixed-Point_Property_is_Topological

Theorem
Let $T \sim T'$ be homeomorphic topological spaces.
Suppose every continuous $f : T \to T$ has a fixed point.

Then, every continuous $g : T' \to T'$ also has a fixed point.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: It's customary on $\mathsf{Pr} \infty \mathsf{fWiki}$ to utilise the terminology of the title in the page, otherwise a casual reader would say "What has being continuous got to do with being topological?"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Let $\phi : T \to T'$ be a homeomorphism.
Let $g : T' \to T'$ be an arbitrary continuous mapping.
Consider $f_g : T \to T$ defined as:

$\map {f_g} x = \map {\phi^{-1}} {\map g {\map \phi x}}$
By definition of homeomorphism and Composite of Continuous Mappings is Continuous:

$f_g$ is continuous
Therefore, by hypothesis, there is a fixed point $x_0 \in T$ of $f_g$.
We then have:














\(\ds \map {f_g} {x_0}\)

\(=\)







\(\ds x_0\)





Definition of Fixed Point








\(\ds \leadsto \ \ \)





\(\ds \map \phi {\map {f_g} {x_0} }\)

\(=\)







\(\ds \map \phi {x_0}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {\map {\phi^{-1} } {\map g {\map \phi {x_0} } } }\)

\(=\)







\(\ds \map \phi {x_0}\)





Definition of $f_g$








\(\ds \leadsto \ \ \)





\(\ds \map g {\map \phi {x_0} }\)

\(=\)







\(\ds \map \phi {x_0}\)





Definition of Inverse Mapping



Therefore, $\map \phi {x_0}$ is a fixed point of $g$.
As $g$ was arbitrary, the result holds.
$\blacksquare$





