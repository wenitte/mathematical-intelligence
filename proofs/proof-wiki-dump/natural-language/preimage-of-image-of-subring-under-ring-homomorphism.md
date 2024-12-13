# 

Source: https://proofwiki.org/wiki/Preimage_of_Image_of_Subring_under_Ring_Homomorphism

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.
Let $K = \map \ker \phi$ be the kernel of $\phi$. 
Let $J$ be a subring of $R_1$.

Then:

$\phi^{-1} \sqbrk {\phi \sqbrk J} = J + K$


Proof
Let $x \in \phi^{-1} \sqbrk {\phi \sqbrk J}$.
Then:














\(\ds x\)

\(\in\)







\(\ds \phi^{-1} \sqbrk {\phi \sqbrk J}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(\in\)







\(\ds \phi \sqbrk J\)





Definition of Preimage of Element under Mapping








\(\ds \leadsto \ \ \)

\(\ds \exists b \in J: \, \)



\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi b\)





Definition of Image of Element under Mapping








\(\ds \leadsto \ \ \)





\(\ds \map \phi x + \paren {-\map \phi b}\)

\(=\)







\(\ds 0_{R_2}\)





Definition of Ring Negative on $R_2$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {x + \paren {-b} }\)

\(=\)







\(\ds 0_{R_2}\)





as $\phi$ is a homomorphism








\(\ds \leadsto \ \ \)





\(\ds x + \paren {-b}\)

\(\in\)







\(\ds K\)





Definition of Kernel of Ring Homomorphism








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds J + K\)





as $x = b + \paren {x + \paren {-b} }$




So we have shown that:

$\phi^{-1} \sqbrk {\phi \sqbrk J} \subseteq J + K$

Now suppose that $x \in J + K$.
Then:














\(\ds x\)

\(\in\)







\(\ds J + K\)














\(\ds \leadsto \ \ \)

\(\ds \exists b \in J, a \in K: \, \)



\(\ds x\)

\(=\)







\(\ds b + a\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi b + \map \phi a\)




















\(\ds \)

\(=\)







\(\ds \map \phi b + 0_{R_2}\)





as $a \in K$














\(\ds \)

\(=\)







\(\ds \map \phi b\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(\in\)







\(\ds \phi \sqbrk J\)





as $b \in J$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \phi^{-1} \sqbrk {\phi \sqbrk J}\)





Definition of Preimage of Subset under Mapping




So we have shown that:

$J + K \subseteq \phi^{-1} \sqbrk {\phi \sqbrk J}$

Hence the result by definition of set equality.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.6: \ 2^\circ$




