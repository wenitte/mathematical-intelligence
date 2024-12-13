# 

Source: https://proofwiki.org/wiki/Integral_of_Generating_Function

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Then:














\(\ds \int_0^z \map G t \rd t\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {a_{k - 1} z^k} k\)




















\(\ds \)

\(=\)







\(\ds a_0 z + \dfrac {a_1 z^2} 2 + \dfrac {a_2 z^3} 3 + \dfrac {a_3 z^4} 4 + \cdots\)











Proof













\(\ds \int_0^z \map G t \rd t\)

\(=\)







\(\ds \int_0^z \paren {\sum_{k \mathop \ge 0} a_k t^k} \rd t\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {\int_0^z a_k t^k \rd t}\)






This article, or a section of it, needs explaining.In particular: Why is this interchange valid?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {\intlimits {a_k \dfrac {t^{k + 1} } {k + 1} } 0 z}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {a_k \dfrac {z^{k + 1} } {k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {a_{k - 1} z^k} k\)





Translation of Index Variable of Summation



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(15)$




