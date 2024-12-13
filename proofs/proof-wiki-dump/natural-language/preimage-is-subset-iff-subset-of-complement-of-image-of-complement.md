# 

Source: https://proofwiki.org/wiki/Preimage_is_Subset_Iff_Subset_of_Complement_of_Image_of_Complement


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S, T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$\forall A \subseteq S, B \subseteq T : f^{-1} \sqbrk B \subseteq A$ if and only if $B \subseteq T \setminus f \sqbrk {S \setminus A}$
Proof
We have:










\(\ds \forall A \subseteq S, B \subseteq T: \, \)



\(\ds f^{-1} \sqbrk B\)

\(\subseteq\)







\(\ds A\)














\(\ds \leadstoandfrom \ \ \)





\(\ds S \setminus A\)

\(\subseteq\)







\(\ds S \setminus {f^{-1} \sqbrk B}\)





Relative Complement inverts Subsets














\(\ds \)

\(=\)







\(\ds f^{-1} \sqbrk {T \setminus B}\)





Complement of Preimage equals Preimage of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds f \sqbrk {S \setminus A}\)

\(\subseteq\)







\(\ds T \setminus B\)





Image is Subset Iff Subset of Preimage








\(\ds \leadstoandfrom \ \ \)





\(\ds T \setminus \paren{T \setminus B}\)

\(\subseteq\)







\(\ds T \setminus f \sqbrk {S \setminus A}\)





Relative Complement inverts Subsets








\(\ds \leadstoandfrom \ \ \)





\(\ds B\)

\(\subseteq\)







\(\ds T \setminus f \sqbrk {S \setminus A}\)





Relative Complement of Relative Complement



$\blacksquare$





