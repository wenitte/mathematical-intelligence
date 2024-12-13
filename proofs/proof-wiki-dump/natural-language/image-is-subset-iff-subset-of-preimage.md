# 

Source: https://proofwiki.org/wiki/Image_is_Subset_Iff_Subset_of_Preimage


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S, T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$\forall A \subseteq S, B \subseteq T : f \sqbrk A \subseteq B$ if and only if $A \subseteq f^{-1} \sqbrk B$
Proof
Necessary Condition
We have:










\(\ds \forall A \subseteq S, B \subseteq T: \, \)



\(\ds f \sqbrk A\)

\(\subseteq\)







\(\ds B\)














\(\ds \leadsto \ \ \)





\(\ds f^{-1} \sqbrk {f \sqbrk A}\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk B\)





Preimage of Subset is Subset of Preimage








\(\ds \leadsto \ \ \)





\(\ds \paren{f^{-1} \circ f} \sqbrk A\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk B\)





Definition of Composition of Mappings








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk B\)





Subset of Domain is Subset of Preimage of Image



$\Box$

Sufficient Condition
We have:










\(\ds \forall A \subseteq S, B \subseteq T: \, \)



\(\ds A\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk B\)














\(\ds \leadsto \ \ \)





\(\ds f \sqbrk A\)

\(\subseteq\)







\(\ds f \sqbrk {f^{-1} \sqbrk B}\)





Image of Subset under Mapping is Subset of Image














\(\ds \)

\(=\)







\(\ds \paren{f \circ f^{-1} } \sqbrk B\)





Definition of Composition of Mappings














\(\ds \)

\(\subseteq\)







\(\ds B\)





Image of Preimage under Mapping



$\blacksquare$





