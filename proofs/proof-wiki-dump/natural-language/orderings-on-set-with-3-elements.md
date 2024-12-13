# 

Source: https://proofwiki.org/wiki/Orderings_on_Set_with_3_Elements



Examples of Orderings
Let $S = \set {a, b, c}$ be an arbitrary set with $3$ elements.
The following are all the orderings that can be applied to $S$, grouped into isomorphism classes.

In the below, $\tuple {x, y}$ indicates that $x \preccurlyeq y$ for the ordering $\preccurlyeq$ under consideration.


Trivial Ordering









\(\ds \preccurlyeq_0: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c} }\)

\(\)







\(\ds \)










This is its Hasse diagram:


$2$ Elements Ordered









\(\ds \preccurlyeq_1: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b} }\)

\(:\)







\(\ds a \preccurlyeq_1 b\)
















\(\ds \preccurlyeq_2: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, c} }\)

\(:\)







\(\ds a \preccurlyeq_2 c\)
















\(\ds \preccurlyeq_3: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {b, c} }\)

\(:\)







\(\ds b \preccurlyeq_3 c\)
















\(\ds \preccurlyeq_4: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {b, a} }\)

\(:\)







\(\ds b \preccurlyeq_4 a\)
















\(\ds \preccurlyeq_5: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {c, a} }\)

\(:\)







\(\ds c \preccurlyeq_5 a\)
















\(\ds \preccurlyeq_6: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {c, b} }\)

\(:\)







\(\ds c \preccurlyeq_6 b\)










This is its Hasse diagram:


where the labels can be arbitrary.


$2$ Maximal Elements









\(\ds \preccurlyeq_7: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b}, \tuple {a, c} }\)

\(:\)







\(\ds a \preccurlyeq_7 b, c\)
















\(\ds \preccurlyeq_8: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {b, a}, \tuple {b, c} }\)

\(:\)







\(\ds b \preccurlyeq_8 a, c\)
















\(\ds \preccurlyeq_9: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {c, a}, \tuple {c, b} }\)

\(:\)







\(\ds c \preccurlyeq_9 a, b\)










This is its Hasse diagram:


where the labels can be arbitrary.


$2$ Minimal Elements









\(\ds \preccurlyeq_{10}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, c}, \tuple {b, c} }\)

\(:\)







\(\ds a, b \preccurlyeq_{10} c\)
















\(\ds \preccurlyeq_{11}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b}, \tuple {c, b} }\)

\(:\)







\(\ds a, c \preccurlyeq_{11} b\)
















\(\ds \preccurlyeq_{12}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {b, a}, \tuple {c, a} }\)

\(:\)







\(\ds b, c \preccurlyeq_{12} a\)










This is its Hasse diagram:


where the labels can be arbitrary.


Total Orderings









\(\ds \preccurlyeq_{13}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b}, \tuple {b, c}, \tuple {a, c} }\)

\(:\)







\(\ds a \preccurlyeq_{13} b \preccurlyeq_{13} c\)
















\(\ds \preccurlyeq_{14}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, c}, \tuple {c, b}, \tuple {a, b} }\)

\(:\)







\(\ds a \preccurlyeq_{14} c \preccurlyeq_{14} b\)
















\(\ds \preccurlyeq_{15}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {b, a}, \tuple {a, c}, \tuple {b, c} }\)

\(:\)







\(\ds b \preccurlyeq_{15} a \preccurlyeq_{15} c\)
















\(\ds \preccurlyeq_{16}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {b, c}, \tuple {c, a}, \tuple {b, a} }\)

\(:\)







\(\ds b \preccurlyeq_{16} c \preccurlyeq_{16} a\)
















\(\ds \preccurlyeq_{17}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {c, a}, \tuple {a, b}, \tuple {c, b} }\)

\(:\)







\(\ds c \preccurlyeq_{17} a \preccurlyeq_{17} b\)
















\(\ds \preccurlyeq_{18}: \, \)



\(\ds \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {c, b}, \tuple {b, a}, \tuple {c, a} }\)

\(:\)







\(\ds c \preccurlyeq_{18} b \preccurlyeq_{18} a\)










This is its Hasse diagram:


where the labels can be arbitrary.

These orderings are total orderings.
From Totally Ordered Set is Lattice, they are also lattice orderings.


Summary
There are $19$ different orderings that can be applied to $S$, grouped into $5$ isomorphism classes.
Exactly one of those isomorphism classes is of a lattice ordering.
It contains $6$ such orderings.

Hence for a set with $3$ elements, there are $6$ possible lattice orderings that can be applied to that set.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.3$




