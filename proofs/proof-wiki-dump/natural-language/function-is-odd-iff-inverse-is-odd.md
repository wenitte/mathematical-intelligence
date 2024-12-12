# 

Source: https://proofwiki.org/wiki/Function_is_Odd_Iff_Inverse_is_Odd

Theorem
Let $f$ be an odd real function with an inverse $f^{-1}$.

Then $f^{-1}$ is also odd.


Proof
First note that we have:














\(\ds y\)

\(=\)







\(\ds \map f x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \map {f^{-1} } y\)





Image of Element under Inverse Mapping








\(\ds \leadsto \ \ \)





\(\ds -x\)

\(=\)







\(\ds -\map {f^{-1} } y\)





Multiply both sides by $-1$




Then:












\(\ds -y\)

\(=\)







\(\ds \map f {-x}\)





Definition of Odd Function








\(\ds \leadsto \ \ \)





\(\ds \map {f^{-1} } {-y}\)

\(=\)







\(\ds \map {f^{-1} \circ f} {-x}\)





because $f^{-1}$ is a mapping














\(\ds \)

\(=\)







\(\ds -x\)





Composite of Bijection with Inverse is Identity Mapping














\(\ds \)

\(=\)







\(\ds -\map {f^{-1} } y\)





from above



The result follows by definition of an odd function. 
$\blacksquare$





