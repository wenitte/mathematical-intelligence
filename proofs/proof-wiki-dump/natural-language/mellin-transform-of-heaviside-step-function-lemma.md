# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Heaviside_Step_Function/Lemma

Theorem

It has been suggested that this page be renamed.In particular: This looks like too useful a result to bury as a lemma to something specialised. Recommend we extract it into a result page in its own right -- if it does not already so exist, which it might.To discuss this page in more detail, feel free to use the talk page.

Let $t \in \R$.
Let $s \in \C$ with $\map \Re s < 0$.
Then:

$\ds \lim_{t \mathop \to +\infty} t^s = 0$


Proof
Let $s = a + b i$, where $a, b \in \R$, $a<0$.














\(\ds \cmod {\lim_{t \mathop \to + \infty} t^s}\)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {t^s}\)




















\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {e^{s \ln t} }\)





Definition of Power to Complex Number














\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {e^{\paren {a + b i} \ln t} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {e^{a \ln t} e^{i b \ln t} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {e^{a \ln t} } \cmod {e^{i b \ln t} }\)





Modulus of Product














\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {e^{a \ln t} }\)





Modulus of Exponential of Imaginary Number is One














\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {t^a}\)





Definition of Power to Complex Number














\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \cmod {\dfrac 1 {t^{-a} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sequence of Powers of Reciprocals is Null Sequence








\(\ds \leadsto \ \ \)





\(\ds \lim_{t \mathop \to +\infty} t^s\)

\(=\)







\(\ds 0\)









$\blacksquare$





