# 

Source: https://proofwiki.org/wiki/Second_Borel-Cantelli_Lemma


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Statement
Let the events $E_n$ be independent.
Let the sum of the probabilities of the $E_n$ diverges to infinity.
Then the probability that infinitely many of them occur is $1$.
That is:
If $\ds \sum_{n \mathop = 1}^\infty \map \Pr {E_n} = \infty$ and the events $\ds \sequence {E_n}^\infty_{n \mathop = 1}$ are independent, then:

$\ds \map \Pr {\limsup_{n \mathop \to \infty} E_n} = 1$


Proof
Let $\ds \sum_{n \mathop = 1}^\infty \map \Pr {E_n} = \infty$.
Let $\sequence {E_n}^\infty_{n \mathop = 1}$ be independent.
It is sufficient to show the event that the $E_n$s did not occur for infinitely many values of $n$ has probability $0$.
This is just to say that it is sufficient to show that:

$\ds 1 - \map \Pr {\limsup_{n \mathop \to \infty} E_n} = 0$

Noting that:














\(\ds 1 - \map \Pr {\limsup_{n \mathop \to \infty} E_n}\)

\(=\)







\(\ds 1 - \map \Pr {\set {E_n \text { i.o.} } }\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\set {E_n \text{ i.o.} }^c}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\paren {\bigcap_{N \mathop = 1}^\infty \bigcup_{n \mathop = N}^\infty E_n}^c}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\bigcup_{N \mathop = 1}^\infty \bigcap_{n \mathop = N}^\infty E_n^c}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\liminf_{n \mathop \to \infty} E_n^c}\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \map \Pr {\bigcap_{n \mathop = N}^\infty E_n^c}\)










This article, or a section of it, needs explaining.In particular: \text { i.o.}You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
it is enough to show:

$\ds \map \Pr {\bigcap_{n \mathop = N}^\infty E_n^c} = 0$
Since the $\sequence {E_n}^\infty_{n \mathop = 1}$ are independent:














\(\ds \map \Pr {\bigcap_{n \mathop = N}^\infty E_n^c}\)

\(=\)







\(\ds \prod^\infty_{n \mathop = N} \map \Pr {E_n^c}\)




















\(\ds \)

\(=\)







\(\ds \prod^\infty_{n \mathop = N} \paren {1 - \map \Pr {E_n} }\)




















\(\ds \)

\(\le\)







\(\ds \prod_{n \mathop = N}^\infty \map \exp {-\map \Pr {E_n} }\)





Exponential Function Inequality














\(\ds \)

\(=\)







\(\ds \map \exp {-\sum_{n \mathop = N}^\infty \map \Pr {E_n} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









This completes the proof.
$\blacksquare$



This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract the following into a second transcluded proofUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article, or a section of it, needs explaining.In particular: What is the motivation of the 'alternative' explanation below? It is exactly the same as the above proof, just wrapped by a logarithm, using the trivial relation $\map \ln {\exp x} = x$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Alternatively, we can see:

$\ds \map \Pr {\bigcap_{n \mathop = N}^\infty E_n^c} = 0$
by taking negative the logarithm of both sides to get:














\(\ds \map \ln {\map \Pr {\bigcap_{n \mathop = N}^\infty E_n^c} }\)

\(=\)







\(\ds -\map \ln {\prod_{n \mathop = N}^\infty \paren {1 - \map \Pr {E_n} } }\)




















\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = N}^\infty \map \ln {1 - \map \Pr {E_n} }\)









Since $-\map \ln {1 - x} \ge x$ for all $x > 0$, the result similarly follows from our assumption that $\ds \sum^\infty_{n \mathop = 1} \map \Pr {E_n} = \infty$.
$\blacksquare$


Also see
Borel-Cantelli Lemma


Source of Name
This entry was named for Émile Borel and Francesco Paolo Cantelli.





