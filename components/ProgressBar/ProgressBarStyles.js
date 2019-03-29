import colors from '../../constants/Colors';

const styles = {
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  circleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSelected: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  },
  circleText: {
    paddingBottom: 4,
    paddingTop: 4,
  },
  line: {
    width: 100,
    borderWidth: 1,
    height: 1,
    marginTop: 52,
    borderColor: 'red',
    marginLeft: 2,
  },
};

export default styles;
