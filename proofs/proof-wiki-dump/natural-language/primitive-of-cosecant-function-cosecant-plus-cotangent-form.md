# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosecant_Function/Cosecant_plus_Cotangent_Form

Theorem
$\ds \int \csc x \rd x = -\ln \size {\csc x + \cot x} + C$
where $\csc x + \cot x \ne 0$.


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \cot x + \csc x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac \d {\d x} \cot x + \frac \d {\d x} \csc x\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds -\csc^2 x + \frac \d {\d x} \csc x\)





Derivative of Cotangent Function














\(\ds \)

\(=\)







\(\ds -\csc^2 x - \csc x \cot x\)





Derivative of Cosecant Function














\(\ds \)

\(=\)







\(\ds -\csc x \paren {\csc x + \cot x}\)





factorising




Then:














\(\ds \int \csc x \rd x\)

\(=\)







\(\ds \int \frac {\csc x \paren {\csc x + \cot x} } {\csc x + \cot x} \rd x\)





multiplying top and bottom by $\csc x + \cot x$














\(\ds \)

\(=\)







\(\ds -\int \frac {-\csc x \paren {\csc x + \cot x} } {\csc x + \cot x} \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\ln \size {\csc x + \cot x} + C\)





Primitive of Function under its Derivative



$\blacksquare$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Does this give the proof? If so, put on Proof pageIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 5.2$




