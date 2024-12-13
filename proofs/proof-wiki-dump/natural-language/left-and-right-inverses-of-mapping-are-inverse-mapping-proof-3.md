# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverses_of_Mapping_are_Inverse_Mapping/Proof_3

Theorem
Let $f: S \to T$ be a mapping such that:

$(1): \quad \exists g_1: T \to S: g_1 \circ f = I_S$
$(2): \quad \exists g_2: T \to S: f \circ g_2 = I_T$
Then:

$g_1 = g_2 = f^{-1}$
where $f^{-1}$ is the inverse of $f$.


Proof
Because Composition of Mappings is Associative, brackets do not need to be used.




\(\text {(1)}: \quad\)









\(\ds g_1 \circ f\)

\(=\)







\(\ds I_S\)














\(\ds \leadsto \ \ \)





\(\ds g_1 \circ f \circ g_2\)

\(=\)







\(\ds I_S \circ g_2\)




















\(\ds \)

\(=\)







\(\ds g_2\)





Definition of Identity Mapping








\(\text {(2)}: \quad\)









\(\ds f \circ g_2\)

\(=\)







\(\ds I_T\)














\(\ds \leadsto \ \ \)





\(\ds g_1 \circ f \circ g_2\)

\(=\)







\(\ds g_1 \circ I_T\)




















\(\ds \)

\(=\)







\(\ds g_1\)





Definition of Identity Mapping



Thus $g_1 = g_2$.

Now suppose there exists $g_3: T \to S: g_3 \circ f = I_S$.
By the same argument as above, $g_3 = g_2$.
This means that $g_1 (= g_3)$ is the only left inverse of $f$.

Similarly, suppose there exists $g_4: T \to S: f \circ g_4 = I_T$.
By the same argument as above, $g_4 = g_1$.
This means that $g_2 (= g_4)$ is the only right inverse of $f$.

So $g_1 = g_2 = g_3 = g_4$ are all the same.
By Composite of Bijection with Inverse is Identity Mapping, it follows that this unique mapping is the inverse $f^{-1}$.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.7$: Inverses: Proposition $\text{A}.7.3$




